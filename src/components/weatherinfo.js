import React from 'react';
import { WeatherInfoInner, WeatherInfoWrapper } from '../styles/styledweatherinfo';
import Today from './date';
import Forecast from './forecast';
import Weatherextra from './weatherextra';
import Weatherimage from './weatherimage';

const WeatherInfo = () => {


    return (
        <>
            <WeatherInfoWrapper>
                <WeatherInfoInner>
                    <Today />
                    <Weatherimage />
                    <Weatherextra />
                    <Forecast />
                </WeatherInfoInner>
            </WeatherInfoWrapper>
        </>
    )
};

export default WeatherInfo;
