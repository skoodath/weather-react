import { useContext } from "react";
import { Main } from "../styles/wrapper.style";
import { WeatherContext } from "../context/weatherContext";
import Search from "./Search";
import WeatherMain from "./weather/WeatherMain";
import Loading from "./Loading";

const Wrapper = () => {
  const { Wrapper } = Main;
  const { currentWeather, loading } = useContext(WeatherContext);

  return (
    <>
      <Wrapper>
        {loading && <Loading />}
        {currentWeather.name.length === 0 && <Search />}
        {!loading && currentWeather.name.length !== 0 && <WeatherMain />}
      </Wrapper>
    </>
  );
};

export default Wrapper;
