import { takeLatest, call, put } from 'redux-saga/effects';

import weatherReducer, {
    dataFormatter,
    actionTypes,
    getWeatherRequest,
    reset,
    weatherSaga,
    getWeather,
    selectors,
} from './ducks';
import WeatherService from '../../services/weatherService';

jest.mock('../../services/weatherService', () => ({
    getWeather: jest.fn(),
}));

describe('Weather Ducks', () => {
    const list = {
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
        ],
    };

    const dataFormatterExpectedResult = {
        cards: [
            {
                AvgCelcius: 260.69,
                AvgFarenhite: 292.69,
                d: '2020-08-21',
            },
        ],
        weather: {
            '2020-08-21': [
                {
                    Celcius: 260.69,
                    Farenhite: 292.69,
                    time: '06:00:00',
                },
            ],
        },
    };

    describe('dataFormatter', () => {
        let result;

        beforeAll(() => {
            result = dataFormatter(list);
        });

        it('Should return an object with keys `weather` && `cards`', () => {
            expect(result).toMatchObject(dataFormatterExpectedResult);
        });

        it('Describe Cards', () => {
            expect(result.cards).toHaveLength(1);
            expect(result.cards[0]).toMatchObject(dataFormatterExpectedResult.cards[0]);
        });

        it('Describe Weather', () => {
            expect(result.weather).toHaveProperty('2020-08-21');
            expect(result.weather['2020-08-21']).toHaveLength(1);
        });
    });

    describe('weatherReducer', () => {
        const initState = {
            loading: false,
            weather: {},
            cards: [],
            error: false,
        };

        it('Default action should return the initial state', () => {
            expect(weatherReducer(initState, undefined)).toEqual(initState);
        });

        it('handle GET_WEATHER_REQUESTED', () => {
            const action = {
                type: actionTypes.GET_WEATHER_REQUESTED,
            };

            expect(weatherReducer({}, action)).toEqual({
                loading: true,
            });
        });

        it('handle GET_WEATHER_SUCCESS', () => {
            const action = {
                type: actionTypes.GET_WEATHER_SUCCESS,
                payload: list,
            };

            expect(weatherReducer({}, action)).toEqual({
                ...initState,
                ...dataFormatterExpectedResult,
            });
        });

        it('handle GET_WEATHER_ERROR', () => {
            const action = {
                type: actionTypes.GET_WEATHER_ERROR,
            };

            expect(weatherReducer({}, action)).toEqual({
                ...initState,
                error: true,
            });
        });

        it('handle RESET', () => {
            const action = {
                type: actionTypes.RESET,
            };

            expect(weatherReducer({}, action)).toEqual(initState);
        });
    });

    describe('Action Creator', () => {
        it('getWeatherRequest', () => {
            expect(getWeatherRequest()).toEqual({ type: actionTypes.GET_WEATHER_REQUESTED });
        });

        it('reset', () => {
            expect(reset()).toEqual({ type: actionTypes.RESET });
        });
    });

    describe('selectors', () => {
        const state = {
            weather: {
                loading: false,
                weather: {},
                cards: [],
                error: false,
            },
        };

        it('selectWeatherData', () => {
            expect(selectors.selectWeatherData(state)).toEqual(state.weather.weather);
        });
        it('selectCardsData', () => {
            expect(selectors.selectCardsData(state)).toEqual(state.weather.cards);
        });
        it('selectError', () => {
            expect(selectors.selectError(state)).toEqual(state.weather.error);
        });
        it('selectLoading', () => {
            expect(selectors.selectLoading(state)).toEqual(state.weather.loading);
        });
    });

    describe('Sagas', () => {
        describe('weatherSaga', () => {
            const generator = weatherSaga();

            it('should dispatch action "GET_WEATHER_REQUESTED" ', () => {
                expect(generator.next().value).toEqual(takeLatest(actionTypes.GET_WEATHER_REQUESTED, getWeather));
            });

            it('should get complete', () => {
                expect(generator.next().done).toBeTruthy();
            });
        });

        describe('getWeather', () => {
            const generator = getWeather();

            it('should Call `getWeather` method of `Weather Service` ', () => {
                expect(generator.next().value).toEqual(
                    call([WeatherService, 'getWeather'], {
                        q: 'Munich,de',
                        cnt: 40,
                    })
                );
            });

            it('should get complete', () => {
                generator.next().value;
                expect(generator.next().done).toBeTruthy();
            });
        });
    });
});
