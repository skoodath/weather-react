import styled from 'styled-components';

export const WeatherWrapper = styled.section`
    height: 28vh;
    display: flex;
    padding: 1rem;
    align-items: flex-start;
`;
export const CitySpace = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const CityName = styled.h1`
    font-size: 1.8rem;
`;

export const CountryName = styled.h2`
    font-size: 1.3rem;
`;

export const SearchTime = styled.p`
    font-size: 0.9rem;
`;

export const TempSpace = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        margin: 0.4rem;
    }
`;