import React, { Component } from 'react';
import WeatherForm from './WeatherForm';

class Weather extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Weather;
