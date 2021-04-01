import styled from 'styled-components';

export const WeatherInfoWrapper = styled.section`
    height: 65%;
    min-height: 495px;
    position: relative;
`;
export const WeatherInfoInner = styled.div`
    min-height: 495px;
    height: 100%;
    position: relative;
`;

export const CurrentDate = styled.div`
    position: absolute;
    width: 60px;
    height: 90px;
    background-color: #fffc;
    color: #00344D;
    top: -5%;
    left: 20%;
    box-shadow: 0 0 3px #00000040;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    span{
        font-weight: bold;
        font-size: 0.9rem;
    }
`;

export const WeatherImage = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;
    user-select: none;
    img{
        background-color: #ffffff50;
        border-radius: 5px 0 0 5px;
    }
    h3{
        color: #fff;
        width: 100%;
        text-align: center;
        margin: 0.4rem;
    }
`;

export const WeatherExtraWrapper = styled.div`
    height: 38%;
    min-height: 190px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    user-select: none;
`;

export const ExtraInnerDay = styled.ul`
    width: 100%;
    min-height: 90px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    user-select: none;
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #ffffff35;
        margin: 0.25rem;
        padding: 0.8rem;
        border: none;
        width: 100%;
        height: 80px;
        flex-grow: 0;
        flex-basis: 150px;
        color: #fff;


        h5{
            font-size: .95rem;
            user-select: none;
        }
        span{
            font-size: 0.7rem;
            user-select: none;
        }
    }
`;


