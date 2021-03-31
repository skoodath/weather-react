import styled from 'styled-components';
import {device } from './device';

export const StyledWrapperDay = styled.section`
    height: 100vh;
    background-image: linear-gradient(-120deg,#70d7ff,#6c86db);
    overflow: hidden;
    min-width: 360px;
    width: 100%;
    @media ${device.tablet}{
      height: 768px;
      border-radius: 10px;
      max-width: 360px;
    }
    @media ${device.desktop}{
      height: 768px;
      border-radius: 10px;
    }
`;

export const StyledWrapperNight = styled.section`
    height: 100vh;
    background-image: linear-gradient(45deg, #0b3bcc, #262c3e);
    overflow: hidden;
    max-width: 360px;
    min-width: 360px;
    @media ${device.desktop}{
      height: 768px;
      border-radius: 10px;
    }
`;