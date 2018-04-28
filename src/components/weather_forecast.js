import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import WeatherList from './weather_list';


class WeatherForecast extends Component {

  componentDidMount() {
    const {city} = this.props;
    const {country} = this.props;
    this.props.fetchWeather(city, country);
  }

  render() {
    if (!this.props.weather || this.props.weather.list.length < 1 || !this.props.weather.list[0].weather) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    else if (this.props.weather.list[0].weather && this.props.weather.cod !== '200') {
      return (
        <div>
          <p>Unfortunately, the weather data could not be loaded!</p>
        </div>
      );
    }
    else {
      const data = this.props.weather;

      return (
        <div>
          <h3>Your reading weather forecast for {data.city.name}</h3>
          <WeatherList data={data}></WeatherList>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps, {fetchWeather})(WeatherForecast);
