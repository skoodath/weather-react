import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";

export const Header = {

  SectionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    height: 100px;
    user-select: none;
    background-color: #8f9bff;
    border-radius: 10px 10px 0 0;
  `,
  SectionInner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem 0.4rem;
    height: 80px;
  `,
  DayorNight: styled.div`
    width: 10%;
    height: 90%;
    display: flex;
    align-items: center;
  `,
  CitySearch: styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: center;
  `,
  DayIcon: styled(WiDaySunny)`
    fill: #fff;
    font-size: 1.8rem;
  `,
  NightIcon: styled(TiWeatherNight)`
    fill: #fff;
    font-size: 1.8rem;
  `,

  SearchBox: styled.input`
    border: none;
    border-bottom: ${({ error }) => (error ? "2px solid red" : "2px solid #ffffff")};
    outline: none;
    padding: 0.2rem;
    width: 100%;
    display: flex;
    height: 43px;
    position: absolute;
    font-size: 18px;
    background-color: transparent;
    color: #fff;
    &:focus {
      transition-duration: 0.5s;
    }
    &::placeholder {
      color: #fff;
    }
  `,
  
  ErrorMessage: styled.span`
    color: #ff0000;
    background-color: #ffffff65;
    padding: 0.2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  `
}
