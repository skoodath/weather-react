import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import { TiWeatherNight } from 'react-icons/ti';
import { BiSearch } from 'react-icons/bi';


export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 9%;
    min-height: 70px;
    user-select: none;
`;
export const SectionInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0.4rem;
    height: 100%;
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
    background-color: #ffffff75;
    border-radius: 5px;
    border: ${({error}) => error? '1px solid red': '1px solid transparent'};
    outline: none;
    padding: 0.3rem;
    color: #4a5f99;
    width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
    min-height: 46px;
    font-size: 20px;
    &:focus{
        background-color: #ffffff35;
        transition-property: background-color;
        transition-duration: 0.5s;
    }
`;

export const ErrorMessage = styled.span`
    color: #ff0000;
    background-color: #ffffff65;
    padding: 0.2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
`;