import React, { Component } from 'react';

import WeatherForecast from './weather_forecast';

class WeatherChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      selectedCountry: '',
      isSelected: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {

    return(
      <main className="m-1 m-sm-3">
        {this.state.isSelected &&
          <button type="button" className="btn btn-primary mb-2 mb-sm-1 d-block mx-auto"
            onClick={this.onButtonClick}>
            Select a new city
          </button>
        }
        {!this.state.isSelected &&
          <section>
            <h3>Do you want to check out your reading weather forecast?</h3>
            <p>Please fill out all red input fields correctly.</p>
            <form className="form-group row" onSubmit={this.handleSubmit}>
              <div className="col-sm-6 mt-2">
                <label htmlFor="country">Please choose your country:</label>
                <select
                  name="country"
                  id="country"
                  className="form-control"
                  value={this.state.selectedCountry}
                  onChange={this.handleChange}
                  required="true"
                >
                  <option value="">Choose here...</option>
                  <option value="be">Belgium</option>
                  <option value="nl">Netherlands</option>
                  <option value="lu">Luxemburg</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="gb">Great Britain</option>
                  <option value="es">Spain</option>
                  <option value="it">Italy</option>
                  <option value="gr">Greece</option>
                  <option value="at">Austria</option>
                  <option value="ch">Switzerland</option>
                  <option value="us">USA</option>
                </select>
              </div>
              <div className="col-sm-6 mt-2">
                <label htmlFor="city">Please enter your city name:</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  value={this.state.selectedCity}
                  onChange={this.handleChange}
                  required="true"
                >
                </input>
              </div>
              <button type="submit" className="btn btn-primary mt-3 d-block mx-auto">
                Submit
              </button>
            </form>
          </section>}
        {this.state.isSelected &&
          <section>
            <WeatherForecast
              city={this.state.selectedCity}
              country={this.state.selectedCountry}>
            </WeatherForecast>

              <button type="button" className="btn btn-primary mt-2 mb-2 mt-sm-3 mb-sm-3 d-block mx-auto"
                onClick={this.onButtonClick}>
                Select a new city
              </button>
          </section>
        }
      </main>
          );
        }

  handleChange(event) {
    switch (event.target.id) {
      case 'country':
        this.setState({
          selectedCountry: event.target.value
        });
        break;
      case 'city':
        this.setState({
          selectedCity: event.target.value
        });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSelected: true });
  }

  onButtonClick(event) {
    event.preventDefault();
    this.setState({
      selectedCity: '',
      selectedCountry: '',
      isSelected: false
    });
  }
}

export default WeatherChecker;
