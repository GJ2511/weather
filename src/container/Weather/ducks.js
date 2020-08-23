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
        // const response = yield call([WeatherService, 'getWeather'], {
        //     q: 'Munich,de',
        //     cnt: 40,
        // });

        const response = {
            cod: '200',
            message: 0,
            cnt: 40,
            list: [
                {
                    dt: 1597989600,
                    main: {
                        temp: 292.69,
                        feels_like: 294.02,
                        temp_min: 292.69,
                        temp_max: 293.68,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 956,
                        humidity: 83,
                        temp_kf: -0.99,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 1.25,
                        deg: 187,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-21 06:00:00',
                },
                {
                    dt: 1598000400,
                    main: {
                        temp: 298.95,
                        feels_like: 300.85,
                        temp_min: 298.95,
                        temp_max: 300.93,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 957,
                        humidity: 60,
                        temp_kf: -1.98,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 0.94,
                        deg: 192,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-21 09:00:00',
                },
                {
                    dt: 1598011200,
                    main: {
                        temp: 304.25,
                        feels_like: 305.7,
                        temp_min: 304.25,
                        temp_max: 305.1,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 958,
                        humidity: 43,
                        temp_kf: -0.85,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 1.34,
                        deg: 43,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-21 12:00:00',
                },
                {
                    dt: 1598022000,
                    main: {
                        temp: 303.72,
                        feels_like: 304.72,
                        temp_min: 303.72,
                        temp_max: 303.82,
                        pressure: 1014,
                        sea_level: 1014,
                        grnd_level: 957,
                        humidity: 47,
                        temp_kf: -0.1,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 2.54,
                        deg: 61,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-21 15:00:00',
                },
                {
                    dt: 1598032800,
                    main: {
                        temp: 297.81,
                        feels_like: 300.04,
                        temp_min: 297.81,
                        temp_max: 297.81,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 957,
                        humidity: 74,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 1.89,
                        deg: 96,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-21 18:00:00',
                },
                {
                    dt: 1598043600,
                    main: {
                        temp: 294.8,
                        feels_like: 296.79,
                        temp_min: 294.8,
                        temp_max: 294.8,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 958,
                        humidity: 80,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 1.18,
                        deg: 145,
                    },
                    visibility: 10000,
                    pop: 0.02,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-21 21:00:00',
                },
                {
                    dt: 1598054400,
                    main: {
                        temp: 293.25,
                        feels_like: 295.01,
                        temp_min: 293.25,
                        temp_max: 293.25,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 958,
                        humidity: 85,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n',
                        },
                    ],
                    clouds: {
                        all: 6,
                    },
                    wind: {
                        speed: 1.17,
                        deg: 256,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-22 00:00:00',
                },
                {
                    dt: 1598065200,
                    main: {
                        temp: 292.08,
                        feels_like: 291.95,
                        temp_min: 292.08,
                        temp_max: 292.08,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 958,
                        humidity: 80,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04n',
                        },
                    ],
                    clouds: {
                        all: 67,
                    },
                    wind: {
                        speed: 2.7,
                        deg: 262,
                    },
                    visibility: 10000,
                    pop: 0.1,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-22 03:00:00',
                },
                {
                    dt: 1598076000,
                    main: {
                        temp: 292.24,
                        feels_like: 291.54,
                        temp_min: 292.24,
                        temp_max: 292.24,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 959,
                        humidity: 87,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 71,
                    },
                    wind: {
                        speed: 4.32,
                        deg: 286,
                    },
                    visibility: 10000,
                    pop: 0.87,
                    rain: {
                        '3h': 1.15,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-22 06:00:00',
                },
                {
                    dt: 1598086800,
                    main: {
                        temp: 294.01,
                        feels_like: 295.71,
                        temp_min: 294.01,
                        temp_max: 294.01,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 960,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 98,
                    },
                    wind: {
                        speed: 1.59,
                        deg: 323,
                    },
                    visibility: 10000,
                    pop: 0.89,
                    rain: {
                        '3h': 2.02,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-22 09:00:00',
                },
                {
                    dt: 1598097600,
                    main: {
                        temp: 296.12,
                        feels_like: 297.95,
                        temp_min: 296.12,
                        temp_max: 296.12,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 960,
                        humidity: 73,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 98,
                    },
                    wind: {
                        speed: 1.3,
                        deg: 350,
                    },
                    visibility: 10000,
                    pop: 0.83,
                    rain: {
                        '3h': 0.16,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-22 12:00:00',
                },
                {
                    dt: 1598108400,
                    main: {
                        temp: 296.99,
                        feels_like: 299.01,
                        temp_min: 296.99,
                        temp_max: 296.99,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 959,
                        humidity: 69,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 98,
                    },
                    wind: {
                        speed: 0.99,
                        deg: 78,
                    },
                    visibility: 10000,
                    pop: 0.68,
                    rain: {
                        '3h': 0.36,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-22 15:00:00',
                },
                {
                    dt: 1598119200,
                    main: {
                        temp: 293.43,
                        feels_like: 294.46,
                        temp_min: 293.43,
                        temp_max: 293.43,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 960,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 501,
                            main: 'Rain',
                            description: 'moderate rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 98,
                    },
                    wind: {
                        speed: 2.21,
                        deg: 296,
                    },
                    visibility: 10000,
                    pop: 1,
                    rain: {
                        '3h': 6.47,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-22 18:00:00',
                },
                {
                    dt: 1598130000,
                    main: {
                        temp: 291.02,
                        feels_like: 291.75,
                        temp_min: 291.02,
                        temp_max: 291.02,
                        pressure: 1021,
                        sea_level: 1021,
                        grnd_level: 961,
                        humidity: 88,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n',
                        },
                    ],
                    clouds: {
                        all: 38,
                    },
                    wind: {
                        speed: 1.71,
                        deg: 283,
                    },
                    visibility: 10000,
                    pop: 0.73,
                    rain: {
                        '3h': 1.26,
                    },
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-22 21:00:00',
                },
                {
                    dt: 1598140800,
                    main: {
                        temp: 290.18,
                        feels_like: 290.81,
                        temp_min: 290.18,
                        temp_max: 290.18,
                        pressure: 1020,
                        sea_level: 1020,
                        grnd_level: 960,
                        humidity: 86,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n',
                        },
                    ],
                    clouds: {
                        all: 37,
                    },
                    wind: {
                        speed: 1.24,
                        deg: 268,
                    },
                    visibility: 10000,
                    pop: 0.68,
                    rain: {
                        '3h': 0.36,
                    },
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-23 00:00:00',
                },
                {
                    dt: 1598151600,
                    main: {
                        temp: 290.18,
                        feels_like: 290.77,
                        temp_min: 290.18,
                        temp_max: 290.18,
                        pressure: 1020,
                        sea_level: 1020,
                        grnd_level: 960,
                        humidity: 86,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n',
                        },
                    ],
                    clouds: {
                        all: 83,
                    },
                    wind: {
                        speed: 1.29,
                        deg: 242,
                    },
                    visibility: 10000,
                    pop: 0.42,
                    rain: {
                        '3h': 0.28,
                    },
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-23 03:00:00',
                },
                {
                    dt: 1598162400,
                    main: {
                        temp: 290.2,
                        feels_like: 290.4,
                        temp_min: 290.2,
                        temp_max: 290.2,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 959,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d',
                        },
                    ],
                    clouds: {
                        all: 81,
                    },
                    wind: {
                        speed: 1.68,
                        deg: 249,
                    },
                    visibility: 10000,
                    pop: 0.36,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-23 06:00:00',
                },
                {
                    dt: 1598173200,
                    main: {
                        temp: 291.04,
                        feels_like: 291.36,
                        temp_min: 291.04,
                        temp_max: 291.04,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 959,
                        humidity: 82,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d',
                        },
                    ],
                    clouds: {
                        all: 93,
                    },
                    wind: {
                        speed: 1.73,
                        deg: 238,
                    },
                    visibility: 10000,
                    pop: 0.28,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-23 09:00:00',
                },
                {
                    dt: 1598184000,
                    main: {
                        temp: 294.03,
                        feels_like: 293.37,
                        temp_min: 294.03,
                        temp_max: 294.03,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 959,
                        humidity: 62,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 91,
                    },
                    wind: {
                        speed: 2.42,
                        deg: 243,
                    },
                    visibility: 10000,
                    pop: 0.4,
                    rain: {
                        '3h': 0.12,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-23 12:00:00',
                },
                {
                    dt: 1598194800,
                    main: {
                        temp: 292.61,
                        feels_like: 291.8,
                        temp_min: 292.61,
                        temp_max: 292.61,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 958,
                        humidity: 70,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 98,
                    },
                    wind: {
                        speed: 2.88,
                        deg: 222,
                    },
                    visibility: 10000,
                    pop: 0.34,
                    rain: {
                        '3h': 0.16,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-23 15:00:00',
                },
                {
                    dt: 1598205600,
                    main: {
                        temp: 290.29,
                        feels_like: 289.84,
                        temp_min: 290.29,
                        temp_max: 290.29,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 958,
                        humidity: 80,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 58,
                    },
                    wind: {
                        speed: 2.28,
                        deg: 269,
                    },
                    visibility: 10000,
                    pop: 0.51,
                    rain: {
                        '3h': 0.59,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-23 18:00:00',
                },
                {
                    dt: 1598216400,
                    main: {
                        temp: 288.26,
                        feels_like: 287.86,
                        temp_min: 288.26,
                        temp_max: 288.26,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 959,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n',
                        },
                    ],
                    clouds: {
                        all: 1,
                    },
                    wind: {
                        speed: 1.65,
                        deg: 288,
                    },
                    visibility: 10000,
                    pop: 0.59,
                    rain: {
                        '3h': 0.35,
                    },
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-23 21:00:00',
                },
                {
                    dt: 1598227200,
                    main: {
                        temp: 288.07,
                        feels_like: 287.5,
                        temp_min: 288.07,
                        temp_max: 288.07,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 958,
                        humidity: 83,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n',
                        },
                    ],
                    clouds: {
                        all: 25,
                    },
                    wind: {
                        speed: 1.72,
                        deg: 290,
                    },
                    visibility: 10000,
                    pop: 0.42,
                    rain: {
                        '3h': 0.32,
                    },
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-24 00:00:00',
                },
                {
                    dt: 1598238000,
                    main: {
                        temp: 286.78,
                        feels_like: 285.98,
                        temp_min: 286.78,
                        temp_max: 286.78,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 957,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04n',
                        },
                    ],
                    clouds: {
                        all: 56,
                    },
                    wind: {
                        speed: 1.59,
                        deg: 278,
                    },
                    visibility: 10000,
                    pop: 0.22,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-24 03:00:00',
                },
                {
                    dt: 1598248800,
                    main: {
                        temp: 287.78,
                        feels_like: 287.33,
                        temp_min: 287.78,
                        temp_max: 287.78,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 957,
                        humidity: 80,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d',
                        },
                    ],
                    clouds: {
                        all: 74,
                    },
                    wind: {
                        speed: 1.19,
                        deg: 299,
                    },
                    visibility: 10000,
                    pop: 0.18,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-24 06:00:00',
                },
                {
                    dt: 1598259600,
                    main: {
                        temp: 292.14,
                        feels_like: 291.61,
                        temp_min: 292.14,
                        temp_max: 292.14,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 957,
                        humidity: 61,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d',
                        },
                    ],
                    clouds: {
                        all: 72,
                    },
                    wind: {
                        speed: 1.34,
                        deg: 353,
                    },
                    visibility: 10000,
                    pop: 0.1,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-24 09:00:00',
                },
                {
                    dt: 1598270400,
                    main: {
                        temp: 293.87,
                        feels_like: 292.5,
                        temp_min: 293.87,
                        temp_max: 293.87,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 956,
                        humidity: 53,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d',
                        },
                    ],
                    clouds: {
                        all: 64,
                    },
                    wind: {
                        speed: 2.33,
                        deg: 8,
                    },
                    visibility: 10000,
                    pop: 0.09,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-24 12:00:00',
                },
                {
                    dt: 1598281200,
                    main: {
                        temp: 292.78,
                        feels_like: 291.92,
                        temp_min: 292.78,
                        temp_max: 292.78,
                        pressure: 1015,
                        sea_level: 1015,
                        grnd_level: 956,
                        humidity: 63,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 99,
                    },
                    wind: {
                        speed: 2.29,
                        deg: 355,
                    },
                    visibility: 10000,
                    pop: 0.34,
                    rain: {
                        '3h': 0.11,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-24 15:00:00',
                },
                {
                    dt: 1598292000,
                    main: {
                        temp: 289.51,
                        feels_like: 288.99,
                        temp_min: 289.51,
                        temp_max: 289.51,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 956,
                        humidity: 74,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d',
                        },
                    ],
                    clouds: {
                        all: 99,
                    },
                    wind: {
                        speed: 1.5,
                        deg: 326,
                    },
                    visibility: 10000,
                    pop: 0.28,
                    rain: {
                        '3h': 0.18,
                    },
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-24 18:00:00',
                },
                {
                    dt: 1598302800,
                    main: {
                        temp: 288.39,
                        feels_like: 287.37,
                        temp_min: 288.39,
                        temp_max: 288.39,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 957,
                        humidity: 75,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n',
                        },
                    ],
                    clouds: {
                        all: 100,
                    },
                    wind: {
                        speed: 1.85,
                        deg: 312,
                    },
                    visibility: 10000,
                    pop: 0.18,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-24 21:00:00',
                },
                {
                    dt: 1598313600,
                    main: {
                        temp: 286.84,
                        feels_like: 285.88,
                        temp_min: 286.84,
                        temp_max: 286.84,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 957,
                        humidity: 81,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n',
                        },
                    ],
                    clouds: {
                        all: 100,
                    },
                    wind: {
                        speed: 1.63,
                        deg: 277,
                    },
                    visibility: 10000,
                    pop: 0.2,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-25 00:00:00',
                },
                {
                    dt: 1598324400,
                    main: {
                        temp: 284.88,
                        feels_like: 283.87,
                        temp_min: 284.88,
                        temp_max: 284.88,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 957,
                        humidity: 86,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n',
                        },
                    ],
                    clouds: {
                        all: 42,
                    },
                    wind: {
                        speed: 1.3,
                        deg: 258,
                    },
                    visibility: 10000,
                    pop: 0.02,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-25 03:00:00',
                },
                {
                    dt: 1598335200,
                    main: {
                        temp: 286.69,
                        feels_like: 286.01,
                        temp_min: 286.69,
                        temp_max: 286.69,
                        pressure: 1019,
                        sea_level: 1019,
                        grnd_level: 958,
                        humidity: 80,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02d',
                        },
                    ],
                    clouds: {
                        all: 23,
                    },
                    wind: {
                        speed: 1.1,
                        deg: 242,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-25 06:00:00',
                },
                {
                    dt: 1598346000,
                    main: {
                        temp: 293.01,
                        feels_like: 292.93,
                        temp_min: 293.01,
                        temp_max: 293.01,
                        pressure: 1018,
                        sea_level: 1018,
                        grnd_level: 959,
                        humidity: 56,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 0.51,
                        deg: 106,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-25 09:00:00',
                },
                {
                    dt: 1598356800,
                    main: {
                        temp: 295.1,
                        feels_like: 294,
                        temp_min: 295.1,
                        temp_max: 295.1,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 958,
                        humidity: 48,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 3,
                    },
                    wind: {
                        speed: 1.81,
                        deg: 62,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-25 12:00:00',
                },
                {
                    dt: 1598367600,
                    main: {
                        temp: 294.59,
                        feels_like: 293.17,
                        temp_min: 294.59,
                        temp_max: 294.59,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 957,
                        humidity: 53,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 801,
                            main: 'Clouds',
                            description: 'few clouds',
                            icon: '02d',
                        },
                    ],
                    clouds: {
                        all: 11,
                    },
                    wind: {
                        speed: 2.68,
                        deg: 71,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-25 15:00:00',
                },
                {
                    dt: 1598378400,
                    main: {
                        temp: 289.97,
                        feels_like: 289.03,
                        temp_min: 289.97,
                        temp_max: 289.97,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 956,
                        humidity: 75,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01d',
                        },
                    ],
                    clouds: {
                        all: 5,
                    },
                    wind: {
                        speed: 2.39,
                        deg: 92,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'd',
                    },
                    dt_txt: '2020-08-25 18:00:00',
                },
                {
                    dt: 1598389200,
                    main: {
                        temp: 287.58,
                        feels_like: 286.5,
                        temp_min: 287.58,
                        temp_max: 287.58,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 957,
                        humidity: 81,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n',
                        },
                    ],
                    clouds: {
                        all: 0,
                    },
                    wind: {
                        speed: 2.09,
                        deg: 119,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-25 21:00:00',
                },
                {
                    dt: 1598400000,
                    main: {
                        temp: 286.76,
                        feels_like: 286.08,
                        temp_min: 286.76,
                        temp_max: 286.76,
                        pressure: 1017,
                        sea_level: 1017,
                        grnd_level: 956,
                        humidity: 86,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n',
                        },
                    ],
                    clouds: {
                        all: 4,
                    },
                    wind: {
                        speed: 1.57,
                        deg: 173,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-26 00:00:00',
                },
                {
                    dt: 1598410800,
                    main: {
                        temp: 286.98,
                        feels_like: 285.99,
                        temp_min: 286.98,
                        temp_max: 286.98,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 956,
                        humidity: 84,
                        temp_kf: 0,
                    },
                    weather: [
                        {
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04n',
                        },
                    ],
                    clouds: {
                        all: 78,
                    },
                    wind: {
                        speed: 1.95,
                        deg: 214,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: 'n',
                    },
                    dt_txt: '2020-08-26 03:00:00',
                },
            ],
            city: {
                id: 2867714,
                name: 'Munich',
                coord: {
                    lat: 48.1374,
                    lon: 11.5755,
                },
                country: 'DE',
                population: 1260391,
                timezone: 7200,
                sunrise: 1597983417,
                sunset: 1598033818,
            },
        };

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
