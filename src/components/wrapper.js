import React, { useEffect, useState } from "react";
import { Wrapper } from "../styles/wrapper.style";
import Weatherwrap from "./weatherwrapper";
import TopSection from "./topsection";
import axios from "axios";
import WeatherContext from "../context";
import Forecast from "./forecast";

const WrapperComponent = () => {

  const { WrapperDay } = Wrapper;

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [cityname, setCityName] = useState("");
  const [error, setError] = useState("");

  const getCity = (event) => {
    event.preventDefault();
    setCityName(event.target.value);
  };

  const getWeather = async (event) => {
    event.preventDefault();

    const apikey = `appid=301063ece3c24814a1f7ea252290ef1a`;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

    if (event.key === "Enter" && !cityname) {
      alert("enter a valid city name");
      return;
    }
    try {
      if (event.key === "Enter" && cityname) {
        const request = await axios.get(
          `${baseURL}${cityname}&${apikey}&units=metric`
        );
        const response = await request;
        setWeather({
          city: response.data.name,
          country: response.data.sys.country,
          temperature: response.data.main.temp.toFixed(1),
          temp_high: response.data.main.temp_max.toFixed(0),
          temp_low: response.data.main.temp_min.toFixed(0),
          feels_like: response.data.main.feels_like.toFixed(0),
          description: response.data.weather[0].main,
          desc_img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          windspeed: response.data.wind.speed,
          humidity: response.data.main.humidity,
        });
        setCityName("");
      }
    } catch (error) {
      setError("City name was not found");
      setCityName("");
      setWeather({});
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  useEffect(() => {
    const getForecast = async () =>{
      if(weather.city !== "") {

          const req = await axios.get(
            `https://api.weatherbit.io/v2.0/forecast/daily?city=${weather.city}&key=681006333aa8439e85280af36ab1d28e&days=6`
          );
          const res = await req;
          let myForecast = res.data.data.map((d) => ({
            date: new Date(Date.parse(d.valid_date)).toLocaleString("en-us", {
              weekday: "short",
            }),
            max: d.max_temp,
            min: d.min_temp,
            icon: d.weather.icon,
            desc: d.weather.description,
          }));
          let filteredForecast = myForecast.filter((newForecast, i) => i > 0);
          setForecast(filteredForecast);
        }
      }
    getForecast();
    },[weather.city])

  return (
    <>
      <WeatherContext.Provider
        value={{
          getWeather,
          getCity,
          weather,
          forecast,
          cityname,
          setCityName,
          error,
        }}
      >
          <WrapperDay>
            <TopSection />
            <Weatherwrap />
            <Forecast />
          </WrapperDay>
      </WeatherContext.Provider>
    </>
  );
};

export default WrapperComponent;
