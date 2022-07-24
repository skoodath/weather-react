import styled from "styled-components";

export const ForeCast = {
  ForecastWrapper: styled.section`
    margin: 2rem 0 0 0;
  `,
  ForecastData: styled.ul`
  display: flex;
  gap: 5px;
`,
ForecastDataItem: styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 4px;
  background-color: #cce5ff;
  flex-basis: calc(100%-5);
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.5rem 0;
  font-weight: 600;
  color: #002041;
  img {
    width: 50%;
  }
  span {
    font-size: 0.7rem;
  }
`
}
