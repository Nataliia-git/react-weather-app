import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "4a0a9aa45ad0959e9357bf0of17t2779";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search-engine">
        <div>
          {form}
          <div className="overview">
            <h1>{city}</h1>
            <ul>
              <li>Last updated: 10.00 </li>
              <li>{weather.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{Math.round(weather.temperature)}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
