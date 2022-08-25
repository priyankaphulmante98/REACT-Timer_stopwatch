import { useEffect, useState } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUnitlMsTimestamp } from "../Utils/CountdownTimerUtils.js";

const defaultRemainingTime = {
    seconds:'00',
    minutes: '00',
    hours: '00',
    days: '00'
}


const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

useEffect(() => {
    const intervalId = setInterval(() => {
        updateremainingTime(countdownTimestampMs);
       
    }, 1000);
    return () => clearTimeout(intervalId)
}, [countdownTimestampMs])

function updateremainingTime(countdown){
    setRemainingTime(getRemainingTimeUnitlMsTimestamp(countdown));

      }


    return(
        <div className="countdown-timer">
        <span className="two-numbers">{remainingTime.days}</span>
        <span>days</span>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>hours</span>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>minutes</span>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>seconds</span>
        </div>

    );
}

export default CountdownTimer;