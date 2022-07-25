import styled from "styled-components";


export const Header = {

  SectionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    height: 100px;
    user-select: none;
    border-radius: 10px 10px 0 0;
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
    color: #ff0000;
    background-color: #ffffff65;
    padding: 0.2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  `
}
