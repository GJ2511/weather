import React from 'react';

import { Chart } from './index';

describe('Chart', () => {
    const props = {
        unit: 'Celcius',
        dates: ['2020-08-23'],
        weatherData: {
            '2020-08-23': [{ time: '3:00:00', Celcius: '20', Farenhite: '52' }]
        },
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Chart {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders basic markup without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should render a <ColumnChart/>', () => {
        expect(wrapper.name()).toEqual('ColumnChart');
    });
});
