import styled from 'styled-components';
import {device } from './device';

export const Main = {
  Wrapper: styled.section`
    background-image: linear-gradient(#f9fcff,#f3f9ff);
    width: 100vw;
    height: 100vh;
    padding: 10px;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.1), -1px -1px 14px rgba(0,0,0,0.1) inset;
    @media ${device.tablet}{
      border-radius: 15px;
    }
    @media ${device.desktop}{
      max-width: 360px;
      border-radius: 15px;
      height: 698px;
      margin: 2rem auto;
      box-shadow: 1px 1px 15px rgba(0,0,0,0.1), -1px -1px 14px rgba(0,0,0,0.1);
    }
  `,
}