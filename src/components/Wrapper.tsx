import { useContext } from "react";
import { Main } from "../styles/wrapper.style";
import { WeatherContext } from "../context/weatherContext";
import Search from "./Search";
import WeatherMain from "./weather/WeatherMain";

const Wrapper = () => {
  const { Wrapper } = Main;
  const { currentWeather } = useContext(WeatherContext);

  return (
    <>
      <Wrapper>
        {currentWeather.name.length === 0 && <Search />}
        {currentWeather.name.length !== 0 && <WeatherMain />}
      </Wrapper>
    </>
  );
};

export default Wrapper;
