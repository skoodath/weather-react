import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import { TiWeatherNight } from 'react-icons/ti';
import { BiSearch } from 'react-icons/bi';


export const SectionWrapper = styled.section`
    display: flex;
    height: 9vh;
    padding: 1rem;
    justify-content: center;
    align-items: center;
`;

export const DayorNight = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CitySearch = styled.div`
    width: 90%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const DayIcon = styled(WiDaySunny)`
    fill: #fff;
    font-size: 1.8rem;
`;

export const NightIcon = styled(TiWeatherNight)`
    fill: #fff;
    font-size: 1.8rem;
`;

export const SearchIcon = styled(BiSearch)`
    fill: #fff;
    font-size: 1.6rem;
    top: 0;
    right: 0;
    margin: auto 0.5rem auto auto;
    cursor: pointer;
    z-index: 1;
`;
export const SearchBox = styled.input`
    background-color: #ffffff35;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 0.3rem;
    color: #fff;
    width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
`;