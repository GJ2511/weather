import React from 'react';

const Loader = () => {
    return (
        <div className="loader-container mt-5">
            <div className="d-flex  flex-column justify-content-center align-items-center vh-100">
                <div className="spinner-grow" role="status"></div>
                <p className="font-weight-bold">Loading ...</p>
            </div>
        </div>
    );
};

export default Loader;
