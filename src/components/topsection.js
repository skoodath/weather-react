import React, { useContext, useRef } from 'react';
import { Header} from '../styles/header.style';
import WeatherContext from '../context';

const TopSection = (props, ref) => {

    const {getWeather, getCity, cityname} = useContext(WeatherContext);

    const inputRef = useRef(null);

    const {error} = useContext(WeatherContext)

    const { CitySearch, 
        SectionWrapper, 
        SearchBox, 
        SectionInner,
        ErrorMessage } = Header;

    return (
        <>
            <SectionWrapper>
                <SectionInner>
                    <CitySearch>
                        <SearchBox 
                            type="text" 
                            onChange={getCity} 
                            value={cityname}
                            onKeyUp={getWeather}
                            placeholder='Type city...'
                            error={error}
                            ref={inputRef}
                            />
                    </CitySearch >
                </SectionInner>
                
                {error && 
                    <ErrorMessage>{error}</ErrorMessage>}
            </SectionWrapper>   
        </>
    )
}

export default TopSection;
