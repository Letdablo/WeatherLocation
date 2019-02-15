import convert from 'convert-units';
import {
    CLOUD ,
    ClOUDY,
    SUN ,
    RAIN,
} from './../constants/weathers';


const getTemp=(temp) => {
    return Number(convert(temp).from("K").to("C").toFixed(2));
}

const getWeatherState=(weather_data)=>{
    const weatherState= SUN;
    return weatherState;
}

const transformWeather =(weather_data)=>{
    const {humidity,temp}= weather_data.main;
    const {wind}= weather_data;
    const WeatherState= getWeatherState(weather_data);
    const temperature=getTemp(temp);
    console.log(weather_data);
    var dataApi= {
        temperature,
        WeatherState,
        humidity,
        wind:`${wind.speed} m/s`
    }
    return dataApi;
}

export default transformWeather;