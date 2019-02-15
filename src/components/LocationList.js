import React,{Component} from 'react';
import  WeatherLocations from './WeatherLocations'
class LocationList extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                <li>
                    <WeatherLocations city="Madrid"/>
                </li>
                <li>
                    <WeatherLocations city="Barcelona"/>
                </li>
                <li>
                    <WeatherLocations city="Sevilla"/>
                </li>
            </ul>
        );
    }
}
export default LocationList;