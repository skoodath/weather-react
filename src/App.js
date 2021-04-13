import React from 'react';
import Wrapper from './components/wrapper';
import GlobalStyle from './styles/globalstyles';
import { Helmet } from 'react-helmet';

//import Error from './components/error';

const App = () => {
 
  //const [error, setError] = useState('');

  return (
      <>
        <Helmet>
          <title>Daily Weather Snapshot</title>
          <meta name="description" content="An web app to lookup current weather and five days weather forecast" />
          <meta property="og:title" content="Daily Weather Snapshot" />
          <meta property="og:description" content="An web app to lookup current weather and five days weather forecast" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://weathersnap.netlify.app/" />
          <meta property="twitter:site" content="https://weathersnap.netlify.app/" />
        </Helmet>
        <Wrapper />
        <GlobalStyle />
      </>
  )
  
}

export default App;
