import React from 'react';
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData =({data:  {temperature,WeatherState,humidity,wind}}) =>(
        <div className="weatherDataCont">
            <WeatherTemperature 
                temperature={temperature} 
                WeatherState={WeatherState}/> 
            <WeatherExtraInfo 
                humidity={humidity} 
                wind={wind}/>
        </div>   
);
export default WeatherData;

WeatherData.propTypes={
    data:PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
        WeatherState:PropTypes.string.isRequired
    }),
}