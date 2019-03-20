import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import  getUrlForecastByCity from './../services/getUrlForecastByCity';


const days=['Lunes','Martes','Miercoles','Jueves','Viernes'];

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={forecastData:null}
    }
    componentDidMount(){
        fetch(getUrlForecastByCity(this.props.city)).then(data =>(data.json()).then(weather_data =>{
                  console.log(weather_data);
                  this.setState({forecastData:weather_data})
              }
        ));
    }
    renderForescastItemDays(){
       return days.map(day =><ForecastItem key={day} weekDay={day} hour={"3245"} data={this.state.forecastData}></ForecastItem>);
    }
    renderProgress(){
        return <h3>Cargando Promostico extendido..</h3>;
    }
    render(){  
        const {city} =this.props;
        const {forecastData}=this.state;
        return(
            <div>
                <h2 className='forecast-title'>Pronóstico extendido:{`${city}`}</h2>             
                {forecastData ? this.renderForescastItemDays() :this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.protoType={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;