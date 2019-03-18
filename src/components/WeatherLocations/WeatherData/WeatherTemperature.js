import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD ,
    ClOUDY,
    SUN ,
    RAIN,
    FOG,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';

const icons= {
    [SUN]:"day-sunny",
    [FOG]: "day-fog",
    [RAIN]:"rain",
    [CLOUD]:"cloud",
    [ClOUDY]:"cloudy",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstorm",
    [DRIZZLE]:"day-showers"

};

const getWeatherIcon = (WeatherState) =>{
    let icon =icons[WeatherState];

    const size="4x";

    if (icon==null)
        return (
            <WeatherIcons className="wicon" name={"day-sunny"} size={size}/>
        );
    else
        return (
            <WeatherIcons className="wicon" name={icon} size={size}/>
        );
}
const WeatherTemperature = ({temperature, WeatherState}) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(WeatherState)
        }
        <span className="temperature">
            {`${temperature}`}
        </span>
        <span className="temperatureType">
            {`Cª`}
        </span>
    </div>
);
WeatherTemperature.protoTypes ={
    temperature: PropTypes.number.isRequired,
    WeatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;