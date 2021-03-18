import React, {useContext} from 'react';
import Context from '../context';

const Weather = () => {

    const {weather} = useContext(Context);

    const {city, Temperature, Description, Desc_img} = weather;
    return (
        <div className="weather__container">
            <div className="weather__city">
                <h5>City</h5>
                <span>{city}</span>
            </div>
            <div className="weather__temp">{Temperature}</div>
            <div className="weather__desc">
            <img src={Desc_img} alt="weather" />
            <span>{Description}</span>

            </div>
            <div className="weather__misc">
                <div className="weather__loc clear"></div>
                <div className="weather__real clear"></div>
                <div className="weather__max clear"></div>
                <div className="weather__min clear"></div>
            </div>
        </div>
    )
}

export default Weather;