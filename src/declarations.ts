export interface AppState {
  currentWeather: {};
  forecast: {};
}

export type Action =
  | { type: "GET_WEATHER"; payload: string }
  | { type: "GET_FORECAST"; payload: string };
