/* eslint-disable no-unused-vars */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import transformWeather from './../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import WeatherData from './WeatherData';
import Location from './Location';

import './styles.css';
import {
    // eslint-disable-next-line no-unused-vars
    CLOUD ,
    ClOUDY,
    SUN ,
   
} from './../../constants/weathers';


//const WeatherLocations =() =>()
class WeatherLocations extends Component{

    constructor(props) {
        super(props);
        const {city} =props;
        this.state={
            city,
            data:null,
        };
       // console.log("constructor");
    }
    UpdateData= () =>{
        fetch(getUrlWeatherByCity(this.state.city)).then(res =>{
      //      console.log("result handleUpdateClick");
            return res.json();
        }).then(data =>{
           this.setState({
               data:transformWeather(data),
           })     
        });      
    }
    componentDidMount() {
          this.UpdateData();
    }
    /*componentWillMount() {
    }      
  
    componentWillUpdate(nextProps, nextState) {
    }   
    
    componentDidUpdate(prevProps, prevState) {
    } */
    render(){
        const {onWeatherLocationClick}=this.props;
        const {city,data}=this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData  data={data}/> : <center><CircularProgress/></center>}                
            </div>
        );
    }
};
WeatherLocations.protoTypes={
    city:PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func.isRequired
}
export default WeatherLocations;