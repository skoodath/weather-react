import React, { useContext, forwardRef } from 'react';
import { Header} from '../styles/header.style';
import WeatherContext from '../context';
import { FiSearch } from "react-icons/fi";

const TopSection = forwardRef((props, ref) => {

    const {getWeather, error} = useContext(WeatherContext);

    const { CitySearch, 
        SectionWrapper,
        SearchForm,
        SearchBox,
        SearchButton,
        SectionInner,
        ErrorMessage } = Header;

    return (
        <>
            <SectionWrapper>
                <SectionInner>
                    <SearchForm onSubmit={getWeather}>
                        <CitySearch>
                            <SearchBox 
                                type="text"
                                placeholder='Search city...'
                                error={error}
                                ref={ref}
                                />
                            <SearchButton>
                                <FiSearch />
                            </SearchButton>
                        </CitySearch>
                    </SearchForm>
                </SectionInner>
                
                {error && 
                    <ErrorMessage>{error}</ErrorMessage>}
            </SectionWrapper>   
        </>
    )
})

export default TopSection;
