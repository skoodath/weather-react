import React, { useContext } from 'react';
import WeatherContext from '../context';
import { 
        CityName, 
        CitySpace, 
        CountryName, 
        SearchTime, 
        TempAdditional, 
        TempSpace, 
        TempVal, 
        WeatherWrapper } from '../styles/styledweatherwrapper';



const Weatherwrap = () => {

    const {weather, currentTime} = useContext(WeatherContext);

    const {city, country, temperature, temp_high, temp_low} = weather;
    return (
        <>
            <WeatherWrapper>
                <CitySpace>
                    <CityName>{city}</CityName>
                    <CountryName>{country}</CountryName>
                    <SearchTime>{currentTime}</SearchTime>
                
                </CitySpace>
                <TempSpace>
                    <TempVal>{temperature? <span>{temperature}&deg;F</span>: ''}</TempVal>
                    <TempAdditional>
                        {temp_high? <span><b>H: </b>{temp_high}&deg;F</span>: ''}
                        {temp_low? <span><b>L: </b>{temp_low}&deg;F</span>: ''}
                    </TempAdditional>
                </TempSpace>
            </WeatherWrapper>
        </>
    )
}

export default Weatherwrap;