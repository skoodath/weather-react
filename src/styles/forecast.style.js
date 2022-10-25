import styled from "styled-components";
import { device } from "./device";

export const ForeCastStyle = {
  ForecastWrapper: styled.section`
    width: 100%;
    padding: 1.5rem 0;
    margin: 0 auto;
    position: relative;
    flex: 1;
    background-image: linear-gradient(#00000015, #00000005);
    @media ${device.desktop} {
      margin: 0;
      padding: 1.5rem 0;
    }
  `,
  ForecastTitle: styled.h2`
    width: min(80%, 30rem);
    margin: 0 auto 1rem;
    color: #002041;
    text-transform: uppercase;
  `,
  ForecastData: styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 10px;
    width: min(80%, 30rem);
  `,
  ForecastDataItem: styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    flex-basis: 80%;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.4rem 0;
    font-weight: 600;
    position: relative;
    gap: 5px;
    &::after {
      content: "";
      position: absolute;
      width: 80%;
      height: 0.5px;
      left: 50%;
      translate: -50% 0;
      bottom: 0;
      background-color: #f8f8f8ab;
      border-radius: 10px;
    }
    &:last-child {
      &::after {
        background-color: transparent;
      }
    }
    img {
      width: 20%;
      padding: 0.2rem;
      @media ${device.desktop} {
        width: 15%;
      }
    }
    span {
      font-size: 1rem;
      font-weight: 700;
    }
  `,
};
