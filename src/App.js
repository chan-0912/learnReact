import React, { useState, useCallback, useEffect } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
// console.log(Button("hello"));
const App = () => {
  const [showTimer, toggleTimer] = useState(true);
  // const removeTimer = () => {
  //   toggleTimer(!showTimer);
  // };

  return (
    <>
      {/* {showTimer ? <Timer /> : ""} */}
      {showTimer && <Timer customText="Hii from Timer." />}
      <br/>
      <Button
        clickAction={() => {
          toggleTimer(!showTimer);
        }}
      >
        Remove/Add Timer from App
      </Button>
    </>
  );
};

export default App;
