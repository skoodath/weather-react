import React, { useContext, forwardRef } from 'react';
import { Header} from '../styles/header.style';
import WeatherContext from '../context';

const TopSection = forwardRef((props, ref) => {

    const {getWeather} = useContext(WeatherContext);

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
                            onKeyUp={getWeather}
                            placeholder='Search city...'
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
