import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ErrorPage = ({ classes }) => (
    <div
        className={classNames('container ', {
            classes,
        })}
    >
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>Oops!</h1>
                    <h2>Something Went Wrong!</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page cannot be loaded! Please try again after some time
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ErrorPage.propTypes = {
    classes: PropTypes.string,
};

ErrorPage.defaultProps = {
    classes: '',
};

export default ErrorPage;
