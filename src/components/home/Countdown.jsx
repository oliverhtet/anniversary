import React, { useEffect, useRef, useState } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");

  let interval = useRef();

  function calculateTimeLeft() {
    const nextYear = new Date().getFullYear();
    const countdownDate = new Date(`09/03/${nextYear}`).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    calculateTimeLeft();
  });

  return (
    <section className="countdown-section">
      <div className="countdown-container container">
        <div className="countdown-title">
          <h1>Our next anniversary is in</h1>
        </div>

        <ul className="countdown-timer row">
          <li className="col-lg-3">
            <p className="time">{timerDays}</p>
            <p className="time-text">DAYS</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerHours}</p>
            <p className="time-text">HOURS</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerMinutes}</p>
            <p className="time-text">MINUTES</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerSeconds}</p>
            <p className="time-text">SECONDS</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Countdown;
