import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Loader } from '../../component/Loader';

import { reset, getWeatherRequest } from './ducks';

class WeatherContainer extends Component {
    componentDidMount() {
        const { getWeatherRequest } = this.props;

        getWeatherRequest();
    }

    componentWillUnmount() {
        const { reset } = this.props;

        reset();
    }

    render() {
        const { loading } = this.props;

        if (loading) {
            return (
                <div className="mt-5">
                    <Loader />
                </div>
            );
        }

        return <h1>HERE ACTUAL DESIGN </h1>;
    }
}

WeatherContainer.propTypes = {
    error: PropTypes.object.isRequired,
    getWeatherRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ weather }) => ({
    data: weather.data,
    error: weather.error,
    loading: weather.loading,
});

export default connect(mapStateToProps, { reset, getWeatherRequest })(WeatherContainer);
