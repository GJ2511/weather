import React from 'react';

import { Card } from './index';

describe('Card', () => {
    const props = {
        unit: 'Celcius',
        startIndex: 0,
        endIndex: 3,
        handleClick: jest.fn(),
        selectDate: '',
        cards: [{ d: '2020-08-23', AvgCelcius: 20, AvgFarenhite: 52 }]
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Card {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders basic markup without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should render a <Card/>', () => {
        expect(wrapper.name()).toEqual('Card');
    });

    it('should have class', () => {
        expect(wrapper.find('.card-deck')).toBeTruthy();
    });

    describe('Card', () => {
        it('should have classes', () => {
            expect(wrapper.find('.card')).toBeTruthy();
            expect(wrapper.find('.border-dark')).toBeTruthy();
        });

        it('should call `handleClick`', () => {
            wrapper.find('.card').simulate('click');

            expect(props.handleClick).toHaveBeenCalledTimes(1);
        });
    });
});
