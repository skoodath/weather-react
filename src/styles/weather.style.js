import styled from "styled-components";

export const Weather = {
  WeatherWrapper: styled.section`
    display: flex;
    justify-content: center;  
    align-items: center;
    user-select: none;
    background-color: #8f9bff;
    border-radius: 0 0 10px 10px;
    padding: 0 0 2rem;
    height: fit-content;
    min-height: 360px;
  `,

  LocationWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  CityName: styled.h1`
    font-size: 1.2rem;
  `,

  TempSpace: styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem auto 0;
    border-radius: 5px;
    cursor: pointer;
  `,
  TempWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  TempVal: styled.div`
    span {
      font-size: 3rem;
      margin: 0;
    }
  `,
  TempAdditional: styled.div`
    display: flex;
    span {
      margin: 0 0.2rem;
      font-size: 0.8rem;
    }
  `,
  WeatherInfoWrapper: styled.section`
  position: relative;
`,
  WeatherInfoInner: styled.div`
    height: 100%;
    position: relative;
`,
WeatherExtraWrapper: styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
`,
ExtraInnerDay: styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  user-select: none;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin: 0.25rem;
    padding: 0.8rem;
    border: none;
    width: 100%;
    height: 60px;
    flex-grow: 0;
    flex-basis: 150px;

    h5 {
      font-size: 1.2rem;
      user-select: none;
    }
    span {
      font-size: 0.7rem;
      user-select: none;
    }
  }
`,
WeatherImage: styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  h3 {
    color: #fff;
    width: 100%;
    text-align: center;
    margin: 0 0.4rem;
  }
`,
CurrentDate: styled.div`
  color: #fff;
`,
}

