import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class ForecastExtended extends Component{

   
    render(){
        
        const {city} =this.props;
    //    console.log( this.props);
        return(
            <div>
                <h2 className='forecast-title'>
                    Pronóstico extendido:{`${city}`}
                </h2>
            </div>
        );
    }
}

ForecastExtended.protoType={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;