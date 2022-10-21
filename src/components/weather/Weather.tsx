import React, { useContext, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { WeatherStyle } from "../../styles/weather.style";

const Weather = () => {
  const { currentWeather, error } = useContext(WeatherContext);

  const { weather, name: city, main, wind } = currentWeather;

  const { icon, description } = weather[0];
  const { speed } = wind;
  const { temp, humidity } = main;

  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const [metric, setMetric] = useState(false);

  const capitalize = (string) => {
    if (string)
      return string[0].toUpperCase() + string.split("").slice(1).join("");
  };

  const {
    TempSpace,
    TempVal,
    TempWrap,
    WeatherWrapper,
    WeatherExtraWrapper,
    ExtraInnerDay,
    WeatherImage,
  } = WeatherStyle;

  const metricSwitch = () => {
    setMetric((prevState) => !prevState);
  };

  return (
    <>
      <WeatherWrapper>
        <TempSpace>
          {!error && temp && (
            <WeatherImage>
              <img
                src={weatherIcon}
                alt={capitalize(description)}
                title={description}
              />
            </WeatherImage>
          )}
          <TempWrap onClick={metricSwitch}>
            {metric && currentWeather && (
              <TempVal>
                <span>{temp}&deg;C</span>
              </TempVal>
            )}
            {city && !metric && (
              <TempVal>
                <span>{(temp * (9 / 5) + 32).toFixed(1)}&deg;F</span>
              </TempVal>
            )}
            <span>{capitalize(description)}</span>
          </TempWrap>

          <WeatherExtraWrapper>
            {speed ? (
              <ExtraInnerDay>
                <li>
                  <h2>{Math.round(speed).toFixed(1)}</h2>
                  <span>Wind(mph)</span>
                </li>
                <li>
                  <h2>{humidity}</h2>
                  <span>Humidity(%)</span>
                </li>
              </ExtraInnerDay>
            ) : (
              ""
            )}
          </WeatherExtraWrapper>
        </TempSpace>
      </WeatherWrapper>
    </>
  );
};

export default Weather;
