import React, { useState, useEffect } from 'react';
import styles from './countdown.module.css';

const Countdown = ({targetDate}) => {
  const [timeRemaining, setTimeRemaining] = useState('');
  // const targetDate = new Date(2024, 7, 23, 0, 0, 0);

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date();
      console.log(currentDate);
      // const difference = targetDate - currentDate;
      console.log(targetDate);
      const difference = targetDate.getTime() - currentDate.getTime();
      if (difference <= 0) {
        setTimeRemaining('¡YA ES HORA, PONTE A PRUEBA!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      <p>{timeRemaining}</p>
    </div>
  );
};

export default Countdown;