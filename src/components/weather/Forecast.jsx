import React, { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { ForeCastStyle } from "../../styles/forecast.style";

const Forecast = () => {
  const { forecast } = useContext(WeatherContext);
  const { ForecastWrapper, ForecastTitle, ForecastData, ForecastDataItem } =
    ForeCastStyle;

  return (
    <ForecastWrapper>
      {forecast.length > 0 && <ForecastTitle>Next Five Days</ForecastTitle>}
      <ForecastData>
        {forecast.length > 0 &&
          forecast.map((f, i) => (
            <ForecastDataItem key={i}>
              <span>{f.date}</span>
              <img src={`/icons/${f.icon}.png`} alt={f.desc} title={f.desc} />
              <span>{f.max.toFixed(0)}&deg;c</span>
              <span>{f.min.toFixed(0)}&deg;c</span>
            </ForecastDataItem>
          ))}
      </ForecastData>
    </ForecastWrapper>
  );
};

export default Forecast;
