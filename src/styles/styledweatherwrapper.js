import styled from 'styled-components';

export const WeatherWrapper = styled.section`
    height: 35%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: flex-start;
    user-select: none;
`;
export const CitySpace = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LocationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CityName = styled.h1`
    font-size: 1.8rem;
`;

export const CountryName = styled.h2`
    font-size: 1.8rem;
`;

export const SearchTime = styled.p`
    font-size: 0.9rem;
`;

export const TempSpace = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    margin: 2.5rem auto 0;
    background-color: #ffffff45;
    border-radius: 5px;
    cursor: pointer;
`;
export const TempWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const TempVal = styled.div`
    span{
        font-size: 3rem;
        margin: 0;
    }
    
`;

export const TempAdditional = styled.div`
    display: flex;
    span{
        margin: 0 0.2rem;
        font-size: 0.8rem;
    }
`;