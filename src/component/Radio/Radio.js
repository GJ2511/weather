import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ value, unit, handleChange }) => {
    return (
        <>
            <input
                className="form-check-input  hover-hand"
                type="radio"
                value={value}
                checked={unit === value}
                onChange={handleChange}
            />
            <label className="form-check-label">{value}</label>
        </>
    );
};

Radio.propTypes = {
    handleChange: PropTypes.func.isRequired,
    unit: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Radio;
