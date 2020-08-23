import React from 'react';

import { Arrow } from './index';

describe('Arrow', () => {
    const props = {
        direction: 'left',
        children: 'test',
        handleClick: jest.fn(),
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Arrow {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders basic markup without errors', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should render a <Arrow/>', () => {
        expect(wrapper.name()).toEqual('Arrow');
    });

    it('should have class', () => {
        expect(wrapper.find('.arrow')).toBeTruthy();
        expect(wrapper.find('.text-primary')).toBeTruthy();
        expect(wrapper.find('.font-size-70')).toBeTruthy();
        expect(wrapper.find('.hover-hand')).toBeTruthy();
    });

    it('should render children passed', () => {
        expect(wrapper.children().text()).toBe('test');
    });

    it('should call `handleClick`', () => {
        wrapper.find('.arrow').simulate('click');

        expect(props.handleClick).toHaveBeenCalledTimes(1);
    });
});
