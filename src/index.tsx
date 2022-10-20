import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { WeatherContextProvider } from "./context/weatherContext";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
