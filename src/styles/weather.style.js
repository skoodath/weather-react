import styled from "styled-components";

export const WeatherStyle = {
  WeatherWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    border-radius: 0 0 10px 10px;
    margin: 1.5rem auto;
    height: fit-content;
    position: relative;
    z-index: 1;
    flex: 1;
    width: 100%;
  `,

  TempSpace: styled.div`
    width: 100%;
    color: #002041;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  `,
  TempWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(60%, 40rem);
    background-image: linear-gradient(#ffffff37, #ffffff26);
    padding: 0.5rem;
    border-radius: 8px;
  `,
  TempVal: styled.h1`
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
    margin: 1rem 0 0;
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
      margin: 0.3rem 0 0;
      padding: 0.8rem;
      border: none;
      flex: 1;
      &:first-child {
        border-right: 1.5px solid #f8f8f8ab;
      }

      h5 {
        font-size: 1.2rem;
        user-select: none;
      }
      span {
        font-size: 0.75rem;
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
    img {
      width: 100%;
    }
  `,
};
