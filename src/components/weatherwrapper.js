import React, { useContext, useState } from 'react';
import WeatherContext from '../context';
import { Weather } from '../styles/weather.style';



const Weatherwrap = () => {


    const {weather, error} = useContext(WeatherContext);

    const {city, temperature, windspeed, humidity, desc_img, description} = weather;

    const [metric, setMetric] = useState(false);

    const { 
            CityName, 
            LocationWrap, 
            TempSpace, 
            TempVal, 
            TempWrap, 
            WeatherWrapper,
            WeatherExtraWrapper,
            ExtraInnerDay,
            WeatherImage,
            CurrentDate
            } = Weather;

    const metricSwitch = () => {
        setMetric(prevState => !prevState);
    }

    const currentDate = () => {
        return new Date().toLocaleString("en-us", {
            weekday: "long",
            month:"short",
            day: "numeric"
        })
    }
    let today = currentDate();

    return (
        <>
            <WeatherWrapper>
                <TempSpace>
                    {!error && 
                        city && 
                        <CurrentDate>
                            {today}
                        </CurrentDate>
                    }
                    <WeatherImage>
                         <img src={desc_img} alt={description} title={description} />
                    </WeatherImage>
                    <TempWrap onClick={metricSwitch}>
                        {temperature && metric && <TempVal><span>{temperature}&deg;C</span></TempVal>}
                        {temperature && !metric && <TempVal><span>{(temperature * (9/5)+32).toFixed(1)}&deg;F</span></TempVal>}

                    </TempWrap>
                    <LocationWrap>
                        <CityName>{city}</CityName>
                    </LocationWrap>
                    
                    <WeatherExtraWrapper>
                    {windspeed ?
                        <ExtraInnerDay>
                            <li>
                                <h5>{Math.round(windspeed).toFixed(1)}</h5>
                                <span>Wind(mph)</span>
                            </li>
                            <li>
                                <h5>{humidity}</h5>
                                <span>Humidity(%)</span>
                            </li>
                            
                        </ExtraInnerDay> : "" }
                    </WeatherExtraWrapper>
                </TempSpace>
                
            </WeatherWrapper>
        </>
    )
}

export default Weatherwrap;