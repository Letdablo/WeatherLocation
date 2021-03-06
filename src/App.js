import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar  from '@material-ui/core/Toolbar';
import './App.css';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

 const citys=[
  "MADRID",
  "BARCELONA",
  "SEVILLA",
  "VALLADOLID",
  "PAMPLONA"
];

class App extends Component {
  constructor(){
    super();
    this.state={city: null}
  }

  handlerSelectionLocation= city=>{

    this.setState({city});
  }


  render() {
    const {city}=this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              citys={citys} 
              onSelectedLocation={this.handlerSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper  >
              <div className="details">
              {city ? <ForecastExtended city={city}> </ForecastExtended>:null}
              </div>
            </Paper>       
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
 