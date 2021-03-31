import React, { useContext } from 'react';
import WeatherContext from '../context';
import { WeatherInfoInner, WeatherInfoWrapper } from '../styles/styledweatherinfo';
import Weatherextra from './weatherextra';

const WeatherInfo = () => {

    const {error} = useContext(WeatherContext);

    return (
        <>
            <WeatherInfoWrapper>
                <WeatherInfoInner>
                    {!error && <Weatherextra />}
                </WeatherInfoInner>
            </WeatherInfoWrapper>
        </>
    )
};

export default WeatherInfo;
