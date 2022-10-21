import styled from "styled-components";
import { device } from "./device";

export const Main = {
  Wrapper: styled.section`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-image: linear-gradient(#f4f4f4 5%, #38a899bc 80%, #89aee5ba);
    @media ${device.desktop} {
      display: flex;
      margin: 0 auto;
      box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1),
        -1px -1px 14px rgba(0, 0, 0, 0.1);
    }
  `,
};
