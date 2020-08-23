import React from 'react';

import { mapStateToProps, WeatherContainer } from './WeatherContainer';

const state = {
    weather: {
        loading: true,
        weather: {},
        cards: [],
        error: false,
    },
};

describe('mapStateToProps', () => {
    const result = mapStateToProps(state);

    it('Should return cards', () => {
        expect(result.cards).toEqual(state.weather.cards);
    });

    it('Should return weather', () => {
        expect(result.weatherData).toEqual(state.weather.weather);
    });

    it('Should return error', () => {
        expect(result.error).toEqual(state.weather.error);
    });

    it('Should return loading', () => {
        expect(result.loading).toEqual(state.weather.loading);
    });
});

describe('WeatherContainer', () => {
    const props = {
        ...state.weather,
        weatherData: state.weather.weather,
        getWeatherRequest: jest.fn(),
        reset: jest.fn(),
    };
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<WeatherContainer {...props} />);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('should render Loader component as Loading is true', () => {
        expect(wrapper.name()).toBe('Loader');
    });

    it('should render Error component as error is true', () => {
        wrapper.setProps({ loading: false, error: true });
        expect(wrapper.name()).toBe('ErrorPage');
    });

    it('should render wetaher container when loader and error is false', () => {
        wrapper.setProps({ loading: false, error: false });
        expect(wrapper.name()).toBe('div');
        expect(wrapper.hasClass('weather-container')).toBeTruthy();
    });

    describe('Methods', () => {
        let instance;

        beforeEach(() => {
            instance = wrapper.instance();
        });

        it('componentDidMount', () => {
            instance.componentDidMount();
            expect(props.getWeatherRequest).toHaveBeenCalled();
        });

        it('componentWillUnmount', () => {
            instance.componentWillUnmount();
            expect(props.reset).toHaveBeenCalled();
        });

        it('onArrowClick', () => {
            let { startIndex, endIndex } = wrapper.state();

            instance.onArrowClick('left');
            startIndex--;
            endIndex--;
            expect(wrapper.state('startIndex')).toEqual(startIndex);
            expect(wrapper.state('endIndex')).toEqual(endIndex);
        });

        it('onTemperatureChange', () => {
            instance.onTemperatureChange({ target: { value: 'Celcius' } });

            expect(wrapper.state('unit')).toEqual('Celcius');
        });

        it('onCardClick', () => {
            instance.onCardClick('2020-08-21');

            expect(wrapper.state('selectDate')).toEqual('2020-08-21');
        });
    });
});
