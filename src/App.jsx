import React from "react";
import GlobalStyle from "./styles/global.style";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Daily Weather Snapshot</title>
        <meta
          name="description"
          content="An web app to lookup current weather and five days weather forecast"
        />
        <meta property="og:title" content="Daily Weather Snapshot" />
        <meta
          property="og:description"
          content="An web app to lookup current weather and five days weather forecast"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weathersnap.netlify.app/" />
        <meta
          property="twitter:site"
          content="https://weathersnap.netlify.app/"
        />
      </Helmet>
      <Wrapper />
      <GlobalStyle />
    </HelmetProvider>
  );
};

export default App;
