import React, { useRef, useState } from "react";
import { Main } from "../styles/wrapper.style";
import Weatherwrap from "./weatherwrapper";
import TopSection from "./topsection";
import axios from "axios";
import WeatherContext from "../context";
import Forecast from "./forecast";

const WrapperComponent = () => {

  const { Wrapper } = Main;

  const inputRef = useRef(null);

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const capitalize = (string) => {
    return string[0].toUpperCase()+string.split("").slice(1).join("");
  }

  const getWeather = (event) => {
    event.preventDefault();

    const apikey = `appid=301063ece3c24814a1f7ea252290ef1a`;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=`;
    const cityname =  inputRef.current.value.trim();

      if (!cityname) {
        setError("City name cannot be blank!");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }
      Promise.all([
        axios.get(
          `${baseURL}${cityname}&${apikey}&units=metric`
        ),
        axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityname}&key=681006333aa8439e85280af36ab1d28e&days=6`
        )
      ]).then(([{data: weather}, {data: forecast}]) => {
        
      setWeather({
        city: weather.name,
        country: weather.sys.country,
        temperature: weather.main.temp.toFixed(1),
        feels_like: weather.main.feels_like.toFixed(0),
        description: capitalize(weather.weather[0].description),
        desc_img: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        windspeed: weather.wind.speed,
        humidity: weather.main.humidity,
      })
      let myForecast = forecast.data.map((d) => ({
        date: new Date(Date.parse(d.valid_date)).toLocaleString("en-us", {
          weekday: "short",
        }),
        max: d.max_temp,
        min: d.min_temp,
        icon: d.weather.icon,
        desc: d.weather.description,
      }));
      let filteredForecast = myForecast.filter((newForecast, i) => i > 0);
      setForecast(filteredForecast)
      inputRef.current.value = "";
      inputRef.current.blur();
    }).catch(error => {
      setError("City name was not found");
      inputRef.current.value = "";
      inputRef.current.blur();
      setWeather({});
      setForecast([]);
      setTimeout(() => {
        setError("");
      }, 3000);
  })
}

return (
    <>
      <WeatherContext.Provider
        value={{
          getWeather,
          weather,
          forecast,
          error,
        }}
      >
          <Wrapper>
            <TopSection ref={inputRef} />
            <Weatherwrap />
            <Forecast />
          </Wrapper>
      </WeatherContext.Provider>
    </>
  );
};

export default WrapperComponent;
