import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";

export const BackArrow = styled(MdArrowBack)`
  fill: #767676;
  font-size: 1.5rem;
`;

export const HeaderStyles = {
  LocationWrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: min(80%, 100%);
    margin: 2rem auto 1rem;
    flex: 1;
  `,

  BackArrowBox: styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    translate: 0 -50%;
    padding: 0.8rem;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 0.25);
      ${BackArrow} {
        fill: #38a899;
      }
    }
  `,

  CityName: styled.h1`
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
  `,
  CurrentDate: styled.div`
    color: #002041;
  `,
};
