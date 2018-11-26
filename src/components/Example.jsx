import React, { useState, useEffect } from "react";

function Example() {
  // set more useState;
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      //  If your effect returns a function, React will run it when it is time to clean up:
      console.log('test')
    }
  },[count]);// Only re-run the effect if count changes 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <p>You age is {age} </p>
      <button
        onClick = {()=>{
          setAge(age+1)
        }}
      >
        change age
      </button>
    </div>
  );
}
export default Example;
