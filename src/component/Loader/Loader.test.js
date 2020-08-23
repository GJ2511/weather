import React from 'react';

import Loader from './Loader';

describe('Loader', () => {
    const props = {
        classes: 'test',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Loader {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a <Loader/>', () => {
        expect(wrapper.name()).toEqual('Loader');
    });

    it('should have classes', () => {
        expect(wrapper.find('.loader-container')).toBeTruthy();
        expect(wrapper.find('.test')).toBeTruthy();
    });
});
