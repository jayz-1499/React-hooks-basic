import React from "react";
import useClock from "../../hooks/useClock";
import './betterClock.css';
//import PropTypes from "prop-types";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock_time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
