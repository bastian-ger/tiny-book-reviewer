import React, { Component } from 'react';
import _ from 'lodash';

class WeatherList extends Component {

  render() {
    return(
      <div className="row mt-1 mt-sm-2">
        {this.renderList()}
        <p className="credit">
          This weather data is from <a href="https://openweathermap.org/"
          target="_blank">OpenWeatherMap</a>
        </p>
      </div>
    );
  }

  renderList() {
    const {data} = this.props;
    const imgUrlStart = 'https://openweathermap.org/img/w/';
    const imgUrlEnd = '.png';
    let day;
    let date;
    let dateString;
    let dateValue;

    return _.map(data.list, (item) => {
      dateString = item.dt + '000';
      dateValue = parseInt(dateString);

      date = new Date(dateValue);
      switch (date.getDay()) {
        case 0:
          day = 'Sunday';
          break;
        case 1:
          day = 'Monday';
          break;
        case 2:
          day = 'Tuesday';
          break;
        case 3:
          day = 'Wednesday';
          break;
        case 4:
          day = 'Thursday';
          break;
        case 5:
          day = 'Friday';
          break;
        case 6:
          day = 'Saturday';
          break;
        default:
          day = 'day unknown';
      }

      let dateStringMinutes;
      if (date.getMinutes() < 10) {
        dateStringMinutes = '0' + date.getMinutes();
      }
      else {
        dateStringMinutes = date.getMinutes().toString();
      }

      return (
        <article
          key={data.dt}
          className="col-6 col-sm-4 col-md-3 mb-3 p-2 article-usual weather-border"
        >
          <h4 className="font-weight-bold">{`${day}, ${date.getHours()}:${dateStringMinutes}`}</h4>
          <img
            className="forecast-img d-block mx-auto"
            src={`${imgUrlStart}${item.weather[0].icon}${imgUrlEnd}`}
            alt="a weather icon"
            id="forecast-img"
          />
          <p><span className="font-weight-bold">Temperature: </span><span>{item.main.temp.toFixed(1)} °C</span></p>
          <p><span className="font-weight-bold">Description: </span><span>{item.weather[0].description}</span></p>
          <p><span className="font-weight-bold">Humidity: </span><span>{item.main.humidity} %</span></p>
          <p><span className="font-weight-bold">Pressure: </span><span>{item.main.pressure.toFixed(0)} hPa</span></p>
          <p><span className="font-weight-bold">Wind: </span><span>{item.wind.speed.toFixed(0)} km/h</span></p>
        </article>
      );
    })
  }
}

export default WeatherList;
