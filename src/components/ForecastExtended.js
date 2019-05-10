import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import  getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from  './../services/transformForecast'



class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={forecastData:null}
    }
    componentDidMount(){   
        this.UpdateCity(this.props.city);
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.city!=this.props.city){
            this.setState({forecastData:null});
            this.UpdateCity(nextProps.city);
        }
    }

    updateCity(city){
        fetch(getUrlForecastByCity(city)).then(data =>(data.json()).then(weather_data =>{ 
            if(weather_data.data!=undefined){    
                  const forecastData=transformForecast(weather_data);
                  console.log(forecastData);
                  this.setState({forecastData})
              }
            }
        ));
    }

    renderForescastItemDays(forecastData){
       return forecastData.map
       (forcast =>
        (<ForecastItem 
            key={`${forcast.weekDay}${forcast.hour}`} 
            weekDay={forcast.weekDay} 
            hour={forcast.hour} 
            data={forcast.data}></ForecastItem>)
       );
    }
    renderProgress(){
        return <h3>Cargando Pronostico extendido..</h3>;
    }
    render(){  
        const {city} =this.props;
        const {forecastData}=this.state;
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico extendido:{`${city}`}</h2>             
                {forecastData ? this.renderForescastItemDays(forecastData) :this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.protoType={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;