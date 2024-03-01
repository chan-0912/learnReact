import React,{useState} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

// console.log(Button("hello"));
const App = () => {
  const [data,setData] = useState([
    {id:'a', text: "text 0"},
    {id:'b', text: "text 1"},
    {id:'c', text: "text 2"},
    {id:'d', text: "text 3"},

  ]);
  const addMoreData = () => {
    setData ((prevData)=>[...prevData,{id:'e', text: "text 4"}]);
  };
  return (
    <>
    {
      data.map((item,index)=><Text key={item.id}>{item.text}</Text>)
    }
    
    <Button 
      clickAction={addMoreData}
    >
      Click me!
    </Button>
    </>
  );
};

export default App;
