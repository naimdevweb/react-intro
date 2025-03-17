import React, { useEffect, useState, useRef } from "react";
import Warudo from "./components/Warudo";


function Time() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function addOne() {
    setSeconds(prev => prev + 1);
  }

  useEffect(() => {
    intervalRef.current = setInterval(addOne, 1000);
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (seconds >= 10) {
      clearInterval(intervalRef.current);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [seconds]);

  return (
    <section>
      <p>{seconds} secondes se sont écoulées !</p>
      <Warudo seconds={seconds} />
    </section>
  );
}

export default Time;