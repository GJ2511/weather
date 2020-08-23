import React from 'react';

const ErrorPage = () => (
    <div className="container">
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

export default ErrorPage;
