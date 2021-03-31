import React, { useContext, useState } from 'react';
import WeatherContext from '../context';
import { 
        CityName, 
        CitySpace, 
        CountryName, 
        LocationWrap, 
        SearchTime, 
        TempSpace, 
        TempVal, 
        TempWrap, 
        WeatherWrapper } from '../styles/styledweatherwrapper';
import Weatherimage from './weatherimage';



const Weatherwrap = () => {


    const {weather, currentTime, currentDate, error} = useContext(WeatherContext);

    const {city, country, temperature} = weather;

    const [metric, setMetric] = useState(false);

    const metricSwitch = () => {
        setMetric(!metric);
    }

    return (
        <>
            <WeatherWrapper>
                <CitySpace>
                    <LocationWrap>
                        <CityName>{city}{city && <span>,&nbsp;</span>}</CityName>
                        <CountryName>{country}</CountryName>
                    </LocationWrap>
                    {currentTime && <SearchTime>{currentTime}</SearchTime>}
                    {!error && currentDate && <span>{currentDate}</span>}
                
                </CitySpace>
                <TempSpace>
                    <Weatherimage />
                    <TempWrap onClick={metricSwitch}>
                        {temperature && metric && <TempVal><span>{temperature}&deg;C</span></TempVal>}
                        {temperature && !metric && <TempVal><span>{(temperature * (9/5)+32).toFixed(1)}&deg;F</span></TempVal>}

                    </TempWrap>
                    
                </TempSpace>
            </WeatherWrapper>
        </>
    )
}

export default Weatherwrap;