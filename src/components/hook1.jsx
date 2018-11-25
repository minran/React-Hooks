import React, { useState, useEffect } from "react";

function Example() {
  // 可以设置多个 useState;
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You age is {age} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Example;
