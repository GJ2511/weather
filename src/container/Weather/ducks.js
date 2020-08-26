import { takeLatest, call, put } from 'redux-saga/effects';
import { createSelector } from 'reselect';

import WeatherService from '../../services/weatherService';

const initialState = {
    loading: false,
    weather: {},
    cards: [],
    error: false,
};

const PREFIX = 'WEATHER';
const GET_WEATHER_REQUESTED = `${PREFIX}//GET_WEATHER_REQUESTED`;
const GET_WEATHER_SUCCESS = `${PREFIX}//GET_WEATHER_SUCCESS`;
const GET_WEATHER_ERROR = `${PREFIX}//GET_WEATHER_ERROR`;
const RESET = `${PREFIX}//RESET`;

export const actionTypes = {
    GET_WEATHER_REQUESTED,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR,
    RESET,
};

export const dataFormatter = ({ list }) => {
    let weather = {};

    list.forEach((data) => {
        const [d, t] = data.dt_txt.split(' ');
        const Celcius = data.main.temp - 32;

        if (weather[d] === undefined) {
            weather[d] = [];
        }

        weather[d].push({ time: t, Celcius, Farenhite: data.main.temp });
    });

    const dates = Object.keys(weather);

    const cards = dates.map((d) => {
        const { length } = weather[d];
        const tempSum = weather[d].reduce((total, obj) => {
            return total + obj.Farenhite;
        }, 0);

        return { d, AvgFarenhite: tempSum / length, AvgCelcius: (tempSum - length * 32) / length };
    });

    return { weather, cards };
};

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
                error: false,
                ...dataFormatter(payload),
            };
        case GET_WEATHER_ERROR:
            return {
                ...state,
                ...initialState,
                error: true,
            };
        case RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export const getState = (state) => state && state.weather;
export const getWeatherRequest = () => ({ type: GET_WEATHER_REQUESTED });
export const reset = () => ({ type: RESET });

export const selectWeatherData = createSelector([getState], (state) => state.weather);
export const selectCardsData = createSelector([getState], (state) => state.cards);
export const selectError = createSelector([getState], (state) => state.error);
export const selectLoading = createSelector([getState], (state) => state.loading);

export const selectors = {
    selectWeatherData,
    selectCardsData,
    selectError,
    selectLoading,
};

export function* getWeather() {
    try {
        const response = yield call([WeatherService, 'getWeather'], {
            q: 'Munich,de',
            cnt: 40,
        });

        if (response.errors) {
            yield put({ type: GET_WEATHER_ERROR });
        } else {
            yield put({
                type: GET_WEATHER_SUCCESS,
                payload: response,
            });
        }
    } catch (error) {
        yield put({
            type: GET_WEATHER_ERROR,
        });
    }
}

export function* weatherSaga() {
    yield takeLatest(GET_WEATHER_REQUESTED, getWeather);
}

export default weatherReducer;
