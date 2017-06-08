import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
// import openWeatherMap from '../api/openWeatherMap.js';
const openWeatherMap = require('../api/openWeatherMap.js');
import ErrorModal from './ErrorModal';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      location: '',
      isLoading: false,
      errorMessage: undefined
    }
  }
  handleSearch(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }).catch((e) => {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }
  renderMessage(){
    var { isLoading, temp, location } = this.state;

    if (isLoading) {
      return <h3 className="text-center">Fetching Weather...</h3>;
    } else if (temp && location) {
      return (
        <WeatherMessage temp={temp} location={location}/>
      );
    }
  }
  renderError() {
    var { errorMessage } = this.state;
    if (typeof errorMessage === 'string') {
      return (
        <ErrorModal message={errorMessage} />
      );
    }
  }
  componentDidMount() {
    var location = this.props.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render() {
    return (
      <div className="section">
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {this.renderMessage()}
        {this.renderError()}
      </div>
    );
  }
}

export default Weather;
