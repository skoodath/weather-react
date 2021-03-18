import React from 'react';
import { CurrentDate } from '../styles/styledweatherinfo';

const Today = () => {

    return (
        <CurrentDate className="date__container">
            <span>{new Date().toLocaleString("en-us", { weekday: "short"}).toUpperCase()}</span>
            <span>{new Date().toLocaleString("en-us", { day: "numeric"})}</span>
            <span>{new Date().toLocaleString("en-us", { month: "short"}).toUpperCase()}</span>
        </CurrentDate>
    )
}

export default Today;