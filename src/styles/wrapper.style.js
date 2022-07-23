import styled from 'styled-components';
import {device } from './device';

export const Main = {
  Wrapper: styled.section`
    background-color: #ffffff;
    min-width: 360px;
    width: 100%;
    height: 100vh;
    margin: 2rem 0;
    padding: 10px;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.1), -1px -1px 14px rgba(0,0,0,0.1);
    @media ${device.tablet}{
      border-radius: 15px;
    }
    @media ${device.desktop}{
      border-radius: 15px;
      height: 698px;
    }
  `,
}