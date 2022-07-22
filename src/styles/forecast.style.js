import styled from "styled-components";

export const ForeCast = {
  ForecastWrapper: styled.div`
    padding: 0 1rem;
    margin: 2rem 0 0 0;
  `,
  ForecastData: styled.ul`
  display: flex;
`,
ForecastDataItem: styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 50px;
  border-radius: 4px;
  background-color: #ecfcff45;
  flex-basis: calc(100%-5);
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0.2rem;
  padding: 1rem 0;
  img {
    width: 50%;
  }
  span {
    font-size: 0.7rem;
  }
`
}
