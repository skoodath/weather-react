import React, { useContext } from 'react';
import WeatherContext from '../context';
import { ExtraInner, WeatherExtraWrapper } from '../styles/styledweatherinfo';

const Weatherextra = () => {

    const {weather} = useContext(WeatherContext);

    const {windspeed, humidity} = weather;

    return (
        <WeatherExtraWrapper>
            {windspeed? 
                <ExtraInner>
                    <b>Wind: </b>{windspeed} mph
                </ExtraInner> : ''}
            
            {humidity? 
                <ExtraInner>
                <b>Humidity: </b>{humidity}%
                </ExtraInner> : ''}
        </WeatherExtraWrapper>
    )
}

export default Weatherextra;
