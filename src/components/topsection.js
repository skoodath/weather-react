import React, { useContext } from 'react';
import { CitySearch, 
        DayorNight, 
        SectionWrapper, 
        DayIcon,
        SearchBox, 
        NightIcon, 
        SectionInner,
        ErrorMessage} from '../styles/styledtop';
import WeatherContext from '../context';

const TopSection = React.forwardRef((props, ref) => {

    const {getWeather, getCity, cityname} = useContext(WeatherContext);
    const {timeofday, sunsettime, sunrisetime} = useContext(WeatherContext);
    const {error} = useContext(WeatherContext)

    return (
        <>
            <SectionWrapper>
                <SectionInner>
                    {timeofday && <DayorNight>
                        {timeofday >= sunrisetime && timeofday <= sunsettime ? <DayIcon /> : <NightIcon />}
                    </DayorNight>}
                    <CitySearch>
                        <SearchBox 
                            type="text" 
                            onChange={getCity} 
                            value={cityname}
                            onKeyUp={getWeather}
                            placeholder='Enter city name'
                            error={error}
                            ref={ref}
                            />
                    </CitySearch >
                </SectionInner>
                
                {error && 
                    <ErrorMessage>{error}</ErrorMessage>}
            </SectionWrapper>   
        </>
    )
})

export default TopSection;
