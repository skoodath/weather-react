import { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { HeaderStyles, BackArrow } from "../../styles/header.style";

const Header = () => {
  const { currentWeather, error } = useContext(WeatherContext);

  const { name: city, main } = currentWeather;

  const { temp } = main;

  const { CityName, LocationWrap, Location, CurrentDate, BackArrowBox } =
    HeaderStyles;

  const currentDate = () => {
    return new Date().toLocaleString("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };
  let today = currentDate();

  return (
    <>
      <LocationWrap>
        <BackArrowBox onClick={() => window.location.reload()}>
          <BackArrow />
        </BackArrowBox>
        <Location>
          <CityName>{city}</CityName>
          {!error && temp && <CurrentDate>{today}</CurrentDate>}
        </Location>
      </LocationWrap>
    </>
  );
};

export default Header;
