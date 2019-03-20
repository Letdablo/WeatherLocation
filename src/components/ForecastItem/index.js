import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocations/WeatherData';

const ForecastItem = ({weekDay,hour,data}) =>(
<div>
    {weekDay} Hora: {hour}
    <WeatherData data={data}></WeatherData>
</div>

);
ForecastItem.protoType={
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    data:PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
        WeatherState:PropTypes.string.isRequired
    }),
}

export default ForecastItem;