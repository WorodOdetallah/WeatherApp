import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: (response.data.main.temp - 273).toFixed(2),
      humidity: response.data.main.humidity,
      visibility: response.data.visibility / 1000,
      max_temp: (response.data.main.temp_max - 273).toFixed(2),
      min_temp: (response.data.main.temp_min - 273).toFixed(2),
      feels_like: (response.data.main.feels_like - 273).toFixed(2),
      date: new Date(response.data.dt * 1000).toLocaleDateString(),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiURL = 'https://paigtite29.execute-api.us-east-1.amazonaws.com/prod/weather';
    axios.post(apiURL, { city: city }, Headers = { 'Content-Type': 'application/json', 'x-api-key': 'lSGGHgvXhV3met2ibHhiY9LUc6xtuAFD7K6U5ccT', "Access-Control-Allow-Origin": "*" }).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "";
  }
}
