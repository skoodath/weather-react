import React, { useContext } from 'react';
import { WeatherImage } from '../styles/styledweatherinfo';
import WeatherContext from '../context';

const Weatherimage = () => {

  const {weather} = useContext(WeatherContext);

  const {desc_img, description} = weather;

    return (
        <>
          <WeatherImage>
            <h3>{description}</h3>
            <img src={desc_img} alt={description} />
          </WeatherImage>
        </>
    )
}

export default Weatherimage;
