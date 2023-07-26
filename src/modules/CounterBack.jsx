//import React from "react";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const CounterBack = ({ startingMinutes, startingSeconds }) => {
    
    const [mins, setMinutes] = useState(startingMinutes);
    const [secs, setSeconds] = useState(startingSeconds);
    useEffect(() => {
        let sampleInterval = setInterval(() => {
        if (secs > 0) {
            setSeconds(secs - 1);
        }
        if (secs === 0) {
            if (mins === 0) {
            clearInterval(sampleInterval);
            } else {
            setMinutes(mins - 1);
            setSeconds(59);
            }
        }
        }, 1000);
        return () => {
        clearInterval(sampleInterval);
        };
    });
    return (
        <div>
            {!(mins === 0 && secs === 0) ? (
                <h1 className='text-2xl'>
                    ⏱️{mins}:{secs < 10 ? `0${secs}` : secs}⏱️
                </h1>
            ) : ""}
        </div>
    )
}

CounterBack.propTypes = {
    startingMinutes: PropTypes.number.isRequired,
    startingSeconds: PropTypes.number.isRequired,
  };

export default CounterBack