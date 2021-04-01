import React, {useState } from 'react';
import { StyledWrapperDay, StyledWrapperNight } from '../styles/styledwrapper';
import Weatherwrap from './weatherwrapper';
import WeatherInfo from './weatherinfo';
import TopSection from './topsection';
import axios from 'axios';
import WeatherContext from '../context';

const Wrapper = () => {

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [cityname, setCityName] = useState('');
  const [timeofday, setTimeofday] = useState(0);
  const [sunsettime, setSunsetTime] = useState(0);
  const [sunrisetime, setSunriseTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState(null);

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
    setCurrentDate(`${ctTime.toLocaleString("en-us", { weekday: "short"})}, ${ctTime.toLocaleString("en-us", { month: "short"})} ${ctTime.getDate()} ${ctTime.getFullYear()}`);
  }

  const getCity = event => {
    event.preventDefault();
    setCityName(event.target.value);
  }

  const getWeather = async event => {

    event.preventDefault();

    const apikey = `appid=301063ece3c24814a1f7ea252290ef1a`;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

      if (event.key === 'Enter' && !cityname) {
        alert('enter a valid city name');
        return;
      }
      try{
        if (event.key === 'Enter' && cityname) {
          
          const request = axios.get(`${baseURL}${cityname}&${apikey}&units=metric`);
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
              lat: response.data.coord.lat.toFixed(1),
              lon: response.data.coord.lon.toFixed(1),
              sunset: response.data.sys.sunset,
              sunrise: response.data.sys.sunrise,
              timezone: response.data.timezone
            })
            const req = axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityname}&key=681006333aa8439e85280af36ab1d28e&days=6`)
            const res = await req;
            let myForecast = res.data.data.map(d => 
              ({date: new Date(Date.parse(d.valid_date)).toLocaleString("en-us", {weekday: "short"}), 
                max: d.max_temp, 
                min: d.min_temp,
                icon: d.weather.icon,
                desc: d.weather.description}));
            let filteredForecast = myForecast.filter((newForecast, i)=> i > 0);
            setForecast(filteredForecast);
            calCitySunset(response.data.sys.sunset, response.data.timezone);
            calCitySunrise(response.data.sys.sunrise, response.data.timezone);
            calCurrentTime(response.data.timezone);
            setCityName('');
        }
      }
      catch(error){
        setError('City name was not found');
        setCityName('');
        setWeather({});
        setCurrentTime(null);
          setTimeout(()=>{
            setError(''); 
          },3000);
      }
    }
        
  return  (
    <>
        <WeatherContext.Provider 
        value={{
            getWeather,
            getCity,
            weather,
            forecast,
            cityname,
            setCityName,
            timeofday, 
            sunsettime, 
            sunrisetime, 
            currentTime,
            currentDate,
            error
            }}>
            {timeofday >= sunrisetime && timeofday <= sunsettime ? 
            
            <StyledWrapperDay>
              <TopSection />
              <Weatherwrap />
              <WeatherInfo />  
            </StyledWrapperDay> : 
            <StyledWrapperNight>
              <TopSection />
              <Weatherwrap />
              <WeatherInfo />  
            </StyledWrapperNight>}

        </WeatherContext.Provider>
        
    </>
)
}
 

export default Wrapper;