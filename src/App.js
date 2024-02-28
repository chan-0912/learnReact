import React from "react";
import Button from "./Button.jsx";

// console.log(Button("hello"));
const App = () => {
  const handleClickAction = () => {
    console.log("Clicked from parent!");
  };
  return (
    <Button
      data={{ a: { b: { c: "nested" } } }}
      clickAction={handleClickAction}
    >
      Click me!
    </Button>
  );
};

export default App;
