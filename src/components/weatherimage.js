import React, { useContext } from 'react';
import { WeatherImage } from '../styles/styledweatherinfo';
import WeatherContext from '../context';

const Weatherimage = () => {

  const {weather} = useContext(WeatherContext);

  const {desc_img, description} = weather;

    return (
        <>
          <WeatherImage>
            <img src={desc_img} alt={description} title={description} />
          </WeatherImage>
        </>
    )
}

export default Weatherimage;
