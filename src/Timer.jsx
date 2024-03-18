import React, { useState, useEffect } from "react";
const Timer = (props) => {
  const [counter, setCounter] = useState(0);
  const {customText}=props;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Set Interval is running.");
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
    console.log("Interval created with id:", interval);
    return () => {
      console.log("Interval removed with id:", interval);
      clearInterval(interval);
    };
  }, []);

  useEffect(()=>{
    return ()=>{
        console.log("Second useEffect clean up function.")
    }
  },[customText])
  return (
    <>
      <span> Current Time is: {counter}</span>
      <br />
      {customText}
    </>
  );
};

export default Timer;
