import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
// import openWeatherMap from '../api/openWeatherMap.js';
const openWeatherMap = require('../api/openWeatherMap.js');

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      location: '',
      isLoading: false
    }
  }
  handleSearch(location) {
    var that = this;
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }).catch((errorMessage) => {
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  }
  renderMessage(){
    var { isLoading, temp, location } = this.state;

    if (isLoading) {
      return <h3>Fetching Weather...</h3>;
    } else if (temp && location) {
      return (
        <WeatherMessage temp={temp} location={location}/>
      );
    }
  }
  render() {
    return (
      <div className="section">
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {this.renderMessage()}
      </div>
    );
  }
}

export default Weather;
