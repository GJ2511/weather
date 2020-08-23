import React from 'react';

import ErrorPage from './Error';

describe('Error', () => {
    const props = {
        classes: 'test',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ErrorPage {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a <ErrorPage/>', () => {
        expect(wrapper.name()).toEqual('ErrorPage');
    });

    it('should have classes', () => {
        expect(wrapper.find('.error-container')).toBeTruthy();
        expect(wrapper.find('.test')).toBeTruthy();
    });
});
