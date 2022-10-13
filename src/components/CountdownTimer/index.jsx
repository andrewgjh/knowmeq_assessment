import { useState, useEffect } from "react";
import { calcRemainingTime } from "../../util/timerUtils";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ expireTimeMS }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const eachSecInterval = setInterval(() => {
      updateRemainingTime(expireTimeMS);
    }, 1000);
    return () => {
      clearInterval(eachSecInterval);
    };
  }, [expireTimeMS]);

  const updateRemainingTime = expiry_time => {
    setTimeRemaining(calcRemainingTime(expiry_time));
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.blinds}></div>
      <span>{timeRemaining.hours}</span>:<span>{timeRemaining.minutes}</span>:
      <span>{timeRemaining.seconds}</span>
    </div>
  );
};

export default CountdownTimer;
