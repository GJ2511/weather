import { takeLatest, call, put, delay, select } from 'redux-saga/effects';

import WeatherService from '../../services/weatherService';

const initialState = {
    loading: false,
    data: {},
    error: {},
};

const PREFIX = 'WEATHER';
const GET_WEATHER_REQUESTED = `${PREFIX}//GET_WEATHER_REQUESTED`;
const GET_WEATHER_SUCCESS = `${PREFIX}//GET_WEATHER_SUCCESS`;
const GET_WEATHER_ERROR = `${PREFIX}//GET_WEATHER_ERROR`;
const RESET = `${PREFIX}//RESET`;

const weatherReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GET_WEATHER_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {},
                data: { ...payload },
            };
        case GET_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                data: {},
            };
        case RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export const getState = (state) => state && state.weatherReducer;
export const getWeatherRequest = () => ({ type: GET_WEATHER_REQUESTED });
export const reset = () => ({ type: RESET });

function* getWeather() {
    try {
        const response = yield call([WeatherService, 'getWeather'], {
            q: 'Munich,de',
            APPID: '75f972b80e26f14fe6c920aa6a85ad57',
            cnt: 40,
        });

        console.log(response);
        if (response.errors) {
            yield put({ type: GET_WEATHER_ERROR, payload: response.errors });
        } else {
            yield put({
                type: GET_WEATHER_SUCCESS,
                payload: response,
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: GET_WEATHER_ERROR,
            payload: {
                Error: ['Something went wrong'],
            },
        });
    }
}

export function* weatherSaga() {
    yield takeLatest(GET_WEATHER_REQUESTED, getWeather);
}

export default weatherReducer;
