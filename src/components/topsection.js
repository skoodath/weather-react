import React, { useContext } from 'react';
import { CitySearch, 
        DayorNight, 
        SectionWrapper, 
        DayIcon, 
        SearchIcon, 
        SearchBox, 
        NightIcon } from '../styles/styledtop';
import WeatherContext from '../context';

const TopSection = () => {

    

    const {getWeather, getCity, cityname} = useContext(WeatherContext);
    const {timeofday, sunsettime, sunrisetime} = useContext(WeatherContext);

    return (
        <>
            <SectionWrapper>
                <DayorNight>
                    {timeofday >= sunrisetime && timeofday <= sunsettime ? <DayIcon /> : <NightIcon />}
                </DayorNight>
                <CitySearch>
                    <SearchBox type="text" onChange={getCity} value={cityname} />
                    <SearchIcon onClick ={getWeather} />
                </CitySearch >
            </SectionWrapper>   
        </>
    )
}

export default TopSection;
