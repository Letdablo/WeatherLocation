import convert from 'convert-units';
import {
    CLOUD ,
    ClOUDY,
    SUN ,
    RAIN,
    THUNDER,
    DRIZZLE,
    SNOW

} from './../constants/weathers';


const getTemp=(temp) => {
    return Number(convert(temp).from("K").to("C").toFixed(0));
}

const getWeatherState=(weather)=>{
    const {id}=weather;
    if(id<300){
        return THUNDER;
    }else if(id<400){
        return DRIZZLE;
    }else if (id<500){
        return RAIN;
    }else if (id<600){
        return CLOUD;
    }else if (id<700){
        return SNOW;
    }else if (id===800){
        return SUN;
    }else{
        return ClOUDY;
    }
}

const transformWeather =(weather_data)=>{
    if (weather_data.main!=null){
        const {humidity,temp}= weather_data.main;
        const {wind}= weather_data;
        const WeatherState= getWeatherState(weather_data.weather[0]);
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
}

export default transformWeather;