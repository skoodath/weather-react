import React, { useState } from 'react';
import { StyledWrapper } from '../styles/styledwrapper';
import Weatherwrap from './weatherwrapper';
import WeatherInfo from './weatherinfo';
import TopSection from './topsection';
import axios from 'axios';
import WeatherContext from '../context';

const Wrapper = () => {

  const [weather, setWeather] = useState({
    city: null,
    country: '',
    date: '',
    temperature: null,
    temp_high: null,
    temp_low: null,
    description: '',
    desc_img: '',
    windspeed: 0,
    humidity: 0,

    sunset: 0,
    sunrise: 0,
    timezone: 0
  });

  const [cityname, setCityName] = useState('');
  const [timeofday, setTimeofday] = useState(0);
  const [sunsettime, setSunsetTime] = useState(0);
  const [sunrisetime, setSunriseTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);

  const calCitySunset = (sunset, timezone) => {
    let dt = new Date(sunset * 1000);
    let utctime = dt.getTime() + dt.getTimezoneOffset() * 60000;
    let ltime = new Date(utctime + (timezone * 1000)).getHours();
    setSunsetTime(ltime);

  }

  const calCitySunrise = (sunrise, timezone) => {
    let ct = new Date(sunrise * 1000);
    let utctimect = ct.getTime() + ct.getTimezoneOffset() * 60000;
    let ltimect = new Date(utctimect + (timezone * 1000)).getHours();
    setSunriseTime(ltimect);

  }
  const calCurrentTime = (timezone) => {
    let ct = new Date();
    let utctimect = ct.getTime() + ct.getTimezoneOffset() * 60000;
    let ltimect = new Date(utctimect + (timezone * 1000)).getHours();
    let ctTime = new Date(utctimect + (timezone * 1000));
    setTimeofday(ltimect);
    setCurrentTime(ctTime.toLocaleTimeString());
  
  }

  const getCity = e => {
    e.preventDefault();
    setCityName(e.target.value);
  }

  const getWeather = async e => {

    e.preventDefault();
    setCityName(e.target.value);

    const apikey = `appid=301063ece3c24814a1f7ea252290ef1a`;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

      if (!cityname) {
        alert('enter a valid city name');
        return;
      }
      
      const request = axios.get(`${baseURL}${cityname}&${apikey}&units=imperial`);
      const response = await request;
      console.log(response);
          setWeather({
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp.toFixed(1),
            temp_high: response.data.main.temp_max.toFixed(1),
            temp_low: response.data.main.temp_min.toFixed(1),
            description: response.data.weather[0].main,
            desc_img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            windspeed: response.data.wind.speed,
            humidity: response.data.main.humidity,
            sunset: response.data.sys.sunset,
            sunrise: response.data.sys.sunrise,
            timezone: response.data.timezone
          })
          calCitySunset(response.data.sys.sunset, response.data.timezone);
          calCitySunrise(response.data.sys.sunrise, response.data.timezone);
          calCurrentTime(response.data.timezone);
          setCityName(''); 
    }
        
  
  return  (
    <>
        <WeatherContext.Provider 
        value={{
            getWeather,
            getCity,
            weather, 
            cityname, 
            timeofday, 
            sunsettime, 
            sunrisetime, 
            currentTime
            }}>
          <StyledWrapper>
          <TopSection />
          <Weatherwrap />
          <WeatherInfo />
          
        </StyledWrapper>
        </WeatherContext.Provider>
        
    </>
)
}
 

export default Wrapper;