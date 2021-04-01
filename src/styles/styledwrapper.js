import styled from 'styled-components';
import {device } from './device';

export const StyledWrapperDay = styled.section`
    height: 100vh;
    background-image: linear-gradient(#70d7ff,#6c86db);
    overflow: hidden;
    min-width: 360px;
    width: 100%;
    @media ${device.tablet}{
      height: 768px;
      border-radius: 15px;
      max-width: 360px;
    }
    @media ${device.desktop}{
      border-radius: 15px;
    }
`;

export const StyledWrapperNight = styled.section`
    height: 100vh;
    background-image: linear-gradient(#0b3bcc, #262c3e);
    overflow: hidden;
    min-width: 360px;
    width: 100%;
    @media ${device.tablet}{
      height: 768px;
      border-radius: 15px;
      max-width: 360px;
    }
    @media ${device.desktop}{
      border-radius: 15px;
    }
`;