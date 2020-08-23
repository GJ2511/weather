import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Loader } from '../../component/Loader';
import { Radio } from '../../component/Radio';
import { Arrow } from '../../component/Arrow';
import { Card } from '../../component/Card';
import { Chart } from '../../component/Chart';
import { ErrorPage } from '../../component/Error';

import { reset, getWeatherRequest, selectWeatherData, selectCardsData, selectError, selectLoading } from './ducks';

class WeatherContainer extends Component {
    state = {
        unit: 'Celcius',
        startIndex: 0,
        endIndex: 2,
        selectDate: '',
    };

    componentDidMount() {
        const { getWeatherRequest } = this.props;

        getWeatherRequest();
    }

    componentWillUnmount() {
        const { reset } = this.props;

        reset();
    }

    onArrowClick = (direction) => {
        let { startIndex, endIndex } = this.state;

        startIndex = direction === 'left' ? startIndex - 1 : startIndex + 1;
        endIndex = direction === 'left' ? endIndex - 1 : endIndex + 1;

        this.setState({ startIndex, endIndex });
    };

    onTemperatureChange = (evt) => {
        this.setState({
            unit: evt.target.value,
        });
    };

    onCardClick = (d) => {
        const { selectDate } = this.state;
        let dateToBeSet = '';

        if (selectDate !== d) {
            dateToBeSet = d;
        }

        this.setState({ selectDate: dateToBeSet });
    };

    render() {
        const { loading, cards, weatherData, error } = this.props;
        const { unit, startIndex, endIndex, selectDate } = this.state;

        if (loading) {
            return (
                <div className="mt-5">
                    <Loader />
                </div>
            );
        }

        if (error) {
            return <ErrorPage />;
        }

        const dates =
            selectDate !== ''
                ? [selectDate]
                : cards
                      .filter((card, index) => {
                          return index >= startIndex && index <= endIndex;
                      })
                      .map((data) => {
                          return data.d;
                      });

        return (
            <div className="m-1 p-1">
                <div className="row mt-5">
                    <div className="col-2">
                        <Radio unit={unit} value="Celcius" handleChange={this.onTemperatureChange} />
                    </div>
                    <div className="col-2 offset-8">
                        <Radio unit={unit} value="Farenhite" handleChange={this.onTemperatureChange} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {startIndex > 0 && (
                            <Arrow direction="left" handleClick={this.onArrowClick}>
                                &#8592;
                            </Arrow>
                        )}
                    </div>
                    <div className=" col-2 offset-8">
                        {endIndex < cards.length && (
                            <Arrow direction="right" handleClick={this.onArrowClick}>
                                &#8594;
                            </Arrow>
                        )}
                    </div>
                    <Card
                        unit={unit}
                        cards={cards}
                        startIndex={startIndex}
                        endIndex={endIndex}
                        handleClick={this.onCardClick}
                        selectDate={selectDate}
                    />
                </div>
                <div className="row mt-5">
                    <Chart unit={unit} weatherData={weatherData} dates={dates} />
                </div>
            </div>
        );
    }
}

WeatherContainer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.exact({
            d: PropTypes.string,
            AvgCelcius: PropTypes.number,
            AvgFarenhite: PropTypes.number,
        })
    ).isRequired,
    error: PropTypes.bool.isRequired,
    getWeatherRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    weatherData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    cards: selectCardsData(state),
    weatherData: selectWeatherData(state),
    error: selectError(state),
    loading: selectLoading(state),
});

export default connect(mapStateToProps, { reset, getWeatherRequest })(WeatherContainer);
