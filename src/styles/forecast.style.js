import styled from "styled-components";

export const ForeCast = {
  ForecastWrapper: styled.section`
    margin: 2.5rem 0 0 0;
    position: relative;
    z-index: 1;
  `,
  ForecastTitle: styled.h2`
    margin: 0 auto 1rem;
    text-align: center;
    color: #002041;
    text-transform: uppercase;
  `,
  ForecastData: styled.ul`
  display: flex;
  gap: 5px;
  width: fit-content;
  margin: 0 auto;
`,
ForecastDataItem: styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 0.75rem;
  }
`
}
