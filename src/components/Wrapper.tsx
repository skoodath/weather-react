import { Main } from "../styles/wrapper.style";
import Weatherwrap from "./Weather";
import TopSection from "./Header";

import { WeatherContextProvider } from "../context/weatherContext";
import Forecast from "./forecast";

const Wrapper = () => {
  const { Wrapper } = Main;

  return (
    <>
      <WeatherContextProvider>
        <Wrapper>
          <TopSection />
          <Weatherwrap />
          <Forecast />
        </Wrapper>
      </WeatherContextProvider>
    </>
  );
};

export default Wrapper;
