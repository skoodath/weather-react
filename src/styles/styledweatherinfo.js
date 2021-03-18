import styled from 'styled-components';
import bg from './../images/backgroundpattern.svg';

export const WeatherInfoWrapper = styled.section`
    height: 63vh;
    position: relative;
`;
export const WeatherInfoInner = styled.div`
    height: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

export const CurrentDate = styled.div`
    position: absolute;
    width: 75px;
    height: 110px;
    background-color: #fffc;
    color: #00AEFF;
    top: -10%;
    left: 20%;
    box-shadow: 0 0 10px #00000040;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    span{
        font-weight: bold;
    }
`;

export const WeatherImage = styled.div`
    height: 10rem;
    background-color: transparent;
    display: flex;
    padding: 1rem 2rem 0 0;
    justify-content: center;
    align-items: center;
    img{
        width: 120px;
        border-radius: 5px;
        background-color: #00aaff70;
    }
    h3{
        color: #00aaff;
        width: 100%;
        text-align: center;
        margin: 0 2rem 0 0;
    }
`;

export const WeatherExtraWrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    &::after{
        position: absolute;
        content: '';
        width: 20%;
        height: 3px;
        border-radius: 100px;
        background-color: #00aaff;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: 1;

    }
`;

export const ExtraInner = styled.div`
    color: #00AAFF;
`;

