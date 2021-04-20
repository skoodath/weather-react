import React, { useContext } from 'react';
import WeatherContext from '../context';
import { WeatherExtraWrapper, ExtraInnerDay } from '../styles/styledweatherinfo';
import Forecast from './forecast';

const Weatherextra = () => {

    const {weather} = useContext(WeatherContext);


    const {windspeed, humidity, lat, lon, feels_like } = weather;

    return (
        <>
        <WeatherExtraWrapper>
            {windspeed ?
                <ExtraInnerDay>
                    <li>
                        <h5>Real Feel</h5>
                        <span>{feels_like}&deg;C</span>
                    </li>
                    <li>
                        <h5>Wind</h5>
                        <span>{windspeed}mph</span>
                    </li>
                    <li>
                        <h5>Humidity</h5>
                        <span>{humidity}%</span>
                    </li>
                    <li>
                        <h5>Lat | Lon</h5>
                        <span>{lat}&deg; | {lon}&deg;</span>
                    </li>
                    
                </ExtraInnerDay> : "" }
        </WeatherExtraWrapper>
        <Forecast />
        </>
    )
}

export default Weatherextra;
