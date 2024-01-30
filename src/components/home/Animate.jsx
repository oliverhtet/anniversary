import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const start = new Date("September 03, 2018");
const end = new Date();
const range = moment.range(start, end);
const years = range.diff("years");
const months = range.diff("months");
const days = range.diff("days");
const hours = range.diff("hours");

function Animate() {
  return (
    <div className="slide-content">
      <div className="slide-subtitle">
        {/* <h4>GOT MARRIED</h4> */}
      </div>
      <div className="slide-title">
        <h1>Happy {years} Year Anniversary</h1>
        <p>
          {years} years, {months % 12} months, {days % 30} days together!
        </p>
      </div>
      <div className="slide-text"></div>

      <div className="animation-pulse">
        <div className="animated-circle"></div>
      </div>
    </div>
  );
}

export default Animate;
