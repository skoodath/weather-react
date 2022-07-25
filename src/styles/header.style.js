import styled from "styled-components";


export const Header = {

  SectionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    height: 100px;
    user-select: none;
    border-radius: 10px 10px 0 0;
    position: relative;
  `,
  SectionInner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem 0.4rem;
    height: 80px;
  `,
  SearchForm: styled.form`
    width: 90%;
    height: 90%;
    margin: 0 auto;
  `,
  CitySearch: styled.div`
    width: 100%;
    height: 100%;    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  SearchButton: styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    margin: 0 0.2rem;
    cursor: pointer;
    svg{
      stroke: #80beff;
      font-weight: 600;
      font-size: 1.3rem;
    }
    &:hover {
      svg {
        transition: stroke 0.5s;
        stroke: #002041; 
      }
    }
  `,

  SearchBox: styled.input`
    border: none;
    border-bottom: ${({ error }) => (error ? "2px solid red" : "2px solid #80beff")};
    outline: none;
    padding: 0.2rem;
    width: 100%;
    display: flex;
    height: 43px;
    position: absolute;
    font-size: 18px;
    background-color: transparent;
    color: #002041;
    &:focus {
      transition-duration: 0.5s;
      border-bottom: ${({ error }) => (error ? "2px solid red" : "2px solid #002041")};
    }
    &::placeholder {
      color: #013335;
    }
  `,
  
  ErrorMessage: styled.span`
    color: #ffffff;
    background-color: #000000;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%);
    z-index: 1;
    width: 80%;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  `
}
