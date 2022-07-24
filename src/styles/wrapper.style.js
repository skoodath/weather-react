import styled from 'styled-components';
import {device } from './device';

export const Main = {
  Wrapper: styled.section`
    background-color: #ffffff;
    width: 100vw;
    height: 100vh;
    margin: 2rem auto;
    padding: 10px;
    @media ${device.tablet}{
      border-radius: 15px;
    }
    @media ${device.desktop}{
      max-width: 360px;
      border-radius: 15px;
      height: 698px;
      box-shadow: 1px 1px 15px rgba(0,0,0,0.1), -1px -1px 14px rgba(0,0,0,0.1);
    }
  `,
}