import React, { useContext } from 'react';
import WeatherContext from '../context';
import { ForecastWrapper, ForecastData, ForecastDataItem } from '../styles/styledforecast';


const Forecast = () => {
    const {forecast} = useContext(WeatherContext);
    
    return (
        <ForecastWrapper>
            
            <ForecastData>
                {forecast.map((f,i)=><ForecastDataItem key={i}>
                    <img src={`/icons/${f.icon}.png`} alt={f.desc} title={f.desc} />
                    <span>{f.date}</span>
                    <span>{f.max.toFixed(0)}&deg;c</span>
                    <span>{f.min.toFixed(0)}&deg;c</span>
                </ForecastDataItem>)}
            </ForecastData>
        </ForecastWrapper>
    )
}

export default Forecast;
