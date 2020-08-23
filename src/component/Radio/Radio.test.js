import React from 'react';

import Radio from './Radio';

describe('Radio', () => {
    const props = {
        value: 'test',
        unit: 'test',
        handleChange: jest.fn(),
    };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Radio {...props} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a <Radio/>', () => {
        expect(wrapper.name()).toEqual('Radio');
    });

    it('should contain label by default`', () => {
        const label = wrapper.find('.form-check-label');

        expect(label.exists()).toBeTruthy();
        expect(label.text()).toBe('test');
    });

    describe('Input type Radio', () => {
        let input;

        beforeEach(() => {
            input = wrapper.find('input[type="radio"]');
        });

        it('should exist', () => {
            expect(input.exists()).toBeTruthy();
        });

        it('should propagate onChange', () => {
            const value = 'newText1';
            const e = { target: { value } };

            wrapper.setProps({ value });

            input.simulate('change', e);
            expect(props.handleChange).toHaveBeenCalledTimes(1);
        });
    });
});
