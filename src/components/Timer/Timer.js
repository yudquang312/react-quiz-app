import React, { useState, useEffect } from "react";

export default function Timer({ setTimeOut }) {
  const [timeLeft, setTimeLeft] = useState(10);
  useEffect(() => {
    const timeLeftInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timeLeftInterval);
    };
  }, []);
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeOut(true);
    }
  }, [timeLeft]);
  return <div>{timeLeft} s</div>;
}
