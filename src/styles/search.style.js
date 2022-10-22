import styled from "styled-components";
import { device } from "./device";
import { MdArrowForward } from "react-icons/md";

export const InputGroup = {
  SectionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: min(100%, 40rem);
    height: 100vh;
    min-height: 44rem;
    user-select: none;
    border-radius: inherit;
    position: relative;
    margin: 0 auto;
    @media ${device.desktop} {
    }

    &::before {
      content: "";
      position: absolute;
      background-color: #000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      translate: -0.5rem -1rem;
      filter: blur(500px);
    }
    &::after {
      content: "";
      position: absolute;
      background-color: #000;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      translate: -1rem -1rem;
      filter: blur(300px);
    }
  `,
  SectionInner: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(80%, 40rem);
    min-height: 44rem;
    margin: 0 auto;
    padding: 2rem 0;
  `,
  SearchForm: styled.form`
    width: 100%;
    margin: 0 auto;
    flex: 1;
    position: relative;
  `,
  CitySearch: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  SearchButton: styled(MdArrowForward)`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.8rem;
    position: absolute;
    right: 10px;
    top: 0;
    height: 100%;
    margin: 0 0.2rem;
    cursor: pointer;
    z-index: 1;
    fill: #969696;
    &:hover {
      svg {
        transition: stroke 0.5s;
        stroke: #002041;
      }
    }
  `,

  SearchBox: styled.input`
    display: block;
    background-color: #f8f8f8;
    border: ${({ error }) =>
      error ? "1px solid red" : "1px solid transparent"};
    outline: 1px solid transparent;
    border-radius: 50px;
    box-shadow: 0 2px 5px rgba(0 0 0 / 0.085);
    padding: 1rem;
    width: 100%;
    font-size: 16px;
    color: #002041;
    &::placeholder {
      color: #767676;
    }
  `,

  ErrorMessage: styled.div`
    color: #f8f8f8;
    background-color: #232323;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  `,
};

export const Value = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 3;
    margin: 4rem 0 0;
    gap: 20px;
    text-transform: uppercase;
  `,
  TextOne: styled.span`
    font-size: 1.5rem;
    font-weight: 500;
  `,
  TextTwo: styled.span`
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffffdb;
  `,
  TextThree: styled.span`
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff7b2;
  `,
};