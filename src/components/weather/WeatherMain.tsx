import Forecast from "./Forecast";
import Weather from "./Weather";
import styled from "styled-components";
import { device } from "../../styles/device";
import Header from "./Header";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: min(100%, 60rem);
  border-radius: 10px;
  @media ${device.desktop} {
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-image: linear-gradient(
      rgb(255 255 255 / 0.3),
      rgb(255 255 255 / 0.3)
    );
  }
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const WeatherMain = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Weather />
        <Forecast />
      </Main>
    </Container>
  );
};

export default WeatherMain;
