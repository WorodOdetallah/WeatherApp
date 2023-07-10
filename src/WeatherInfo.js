import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>{props.data.date}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 mb-3">
        <div className="col-6">
          <div className="d-flex">
            <div><WeatherIcon code={props.data.icon} size={52} /></div>
              <div>
                <div className="WeatherTemperature">
                  <span className="temperature">{Math.round(props.data.temperature)}</span>
                  <span className="unit">°C</span>
              </div>  
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels_like)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Visibility: {props.data.visibility} Km</li>
            <li>Max Temp: {props.data.max_temp}°C</li>
            <li>Min Temp: {props.data.min_temp}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
