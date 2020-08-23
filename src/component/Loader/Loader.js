import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({ classes }) => {
    return (
        <div
            className={classNames('loader-container ', {
                classes,
            })}
        >
            <div className="d-flex  flex-column justify-content-center align-items-center vh-100">
                <div className="spinner-grow" role="status"></div>
                <p className="font-weight-bold">Loading ...</p>
            </div>
        </div>
    );
};

Loader.propTypes = {
    classes: PropTypes.string,
};

Loader.defaultProps = {
    classes: '',
};

export default Loader;
