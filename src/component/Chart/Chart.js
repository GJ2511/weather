import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

const ColumnChart = ({ unit, weatherData, dates }) => {
    let data = [['Date', `Temperature (in ${unit})`]];

    dates.forEach((d) => {
        const values = weatherData[d].map((weather) => {
            return [`${d} ${weather.time}`, weather[unit]];
        });

        data.push(...values);
    });
    return <Chart chartType="ColumnChart" width="100%" data={data} />;
};

ColumnChart.propTypes = {
    dates: PropTypes.arrayOf(PropTypes.string).isRequired,
    unit: PropTypes.oneOf(['Celcius', 'Farenhite']).isRequired,
    weatherData: PropTypes.object.isRequired,
};

export default ColumnChart;
