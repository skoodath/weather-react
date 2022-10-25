import styled, { keyframes } from "styled-components";

const load = keyframes`
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 999;
`;

export const Loader = styled.span`
  font-size: 2rem;
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    background-color: #38a899;
    z-index: 9999;
    border-radius: inherit;
    animation: ${load} 1.5s linear 1;
  }
`;
