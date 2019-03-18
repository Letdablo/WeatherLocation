import React,{Component} from 'react';
import  WeatherLocations from './WeatherLocations';
import './styles.css';
import PropTypes from 'prop-types';


class LocationList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            citys:props.citys,
            onSelectedLocation: props.onSelectedLocation
        };
    }
    handleWeatherLocationClick = (city,onSelectedLocation) =>{
        console.log("handleWeatherLocationClick: "+city );
        onSelectedLocation(city);
    }
    strToComponents= ({citys,onSelectedLocation}) =>{
        return citys.map((city,index)=>
        <WeatherLocations 
            city={city} 
            key={city}
            onWeatherLocationClick={()=>this.handleWeatherLocationClick(city,onSelectedLocation)}
            />)
    };
    render(){
        return (
            <div className='locationList'>
               {this.strToComponents(this.state)}
            </div> 
        );
    }
}
LocationList.propTypes={
    citys:PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}
export default LocationList;