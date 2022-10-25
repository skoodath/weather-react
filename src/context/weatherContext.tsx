import axios from "axios";
import React, { createContext, useState } from "react";
import { searchParams } from "../components/utils/constants";

const { apikeyWeather, apiKeyForecast, baseUrlWeather, baseUrlForecast } =
  searchParams;

type WeatherState = {
  weather: [{ description: string; icon: string }];
  main: { temp: number; humidity: number };
  name: string;
  wind: {
    speed: number;
  };
};

type ForecastState = [];

interface WeatherContextType {
  currentWeather: WeatherState;
  forecast: ForecastState;
  loading: boolean;
  error: string;
  getWeather: (
    event: React.FormEvent<HTMLFormElement>,
    input: React.RefObject<HTMLInputElement>
  ) => void;
}

const WeatherContext = createContext<WeatherContextType>({
  currentWeather: {
    weather: [{ description: "", icon: "" }],
    main: { temp: 0, humidity: 0 },
    name: "",
    wind: {
      speed: 0,
    },
  },
  forecast: [],
  loading: false,
  error: "",
  getWeather: () => {},
});

const WeatherContextProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherState>({
    weather: [{ description: "", icon: "" }],
    main: { temp: 0, humidity: 0 },
    name: "",
    wind: {
      speed: 0,
    },
  });

  const [forecast, setForecast] = useState<ForecastState>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = (
    event: React.FormEvent<HTMLFormElement>,
    input: React.RefObject<HTMLInputElement>
  ) => {
    event.preventDefault();

    const cityname = input.current!.value.trim();

    if (!cityname) {
      setError("City name cannot be blank!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    setLoading(true);
    Promise.all([
      axios.get(
        `${baseUrlWeather}${cityname}&appid=${apikeyWeather}&units=metric`
      ),
      axios.get(
        `${baseUrlForecast}?city=${cityname}&key=${apiKeyForecast}&days=6`
      ),
    ])
      .then(([{ data: weather }, { data: forecast }]) => {
        setCurrentWeather(weather);

        let myForecast = forecast.data.map((d) => ({
          date: new Date(Date.parse(d.valid_date)).toLocaleString("en-us", {
            weekday: "short",
          }),
          max: d.app_max_temp,
          min: d.app_min_temp,
          icon: d.weather.icon,
          desc: d.weather.description,
        }));
        let filteredForecast = myForecast.filter((newForecast, i) => i > 0);
        setForecast(filteredForecast);
        input.current!.value = "";
        input.current!.blur();
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError("City not found");
        }
        input.current!.value = "";
        input.current!.blur();
        setCurrentWeather({
          weather: [{ description: "", icon: "" }],
          main: { temp: 0, humidity: 0 },
          name: "",
          wind: {
            speed: 0,
          },
        });
        setForecast([]);
        setTimeout(() => {
          setError("");
        }, 3000);
        setLoading(false);
      });
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        loading,
        error,
        getWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export { WeatherContext, WeatherContextProvider };
