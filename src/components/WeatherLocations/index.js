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
    RAIN,
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
        console.log("constructor");
    }
    handleUpdateClick= () =>{
        
        fetch(getUrlWeatherByCity(this.state.city)).then(res =>{
            console.log("result handleUpdateClick");
            return res.json();
        }).then(data =>{
           this.setState({
               data:transformWeather(data),
           })     
        });      
    }
    componentWillMount() {
        console.log("componentWillMount");
    }      
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }   
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    render(){
        console.log("render");
        const {city,data}=this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                {data ? <WeatherData  data={data}/> : <center><CircularProgress/></center>}                
            </div>
        );
    }
};
WeatherLocations.protoTypes={
    city:PropTypes.string.isRequired,
}
export default WeatherLocations;