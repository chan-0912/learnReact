import React, { useState,useCallback } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

// console.log(Button("hello"));
const App = () => {
  const [message, updateMessage] = useState("Hey user, Good Morning!");

  const changeMessage = useCallback(() => {
    // console.log("Before function Clicked, Message: ", message);
    updateMessage ((prevData)=>{
      console.log("Previous message was ",prevData);
      return "Hey user, Good Evening!";
    });
    // console.log("After function Clicked, Message: ", message);
  },[]);
  console.log(message);
  return (
    <>
      <div>{message}</div>
      <Button clickAction={changeMessage}> Change the Message </Button>
    </>
  );
};

export default App;
