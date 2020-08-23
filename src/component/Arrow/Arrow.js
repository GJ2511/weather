import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ direction, handleClick, children }) => {
    return (
        <span className="arrow text-primary font-size-70 hover-hand" onClick={() => handleClick(direction)}>
            {children}
        </span>
    );
};

Arrow.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Arrow;
