import React, { useState, useEffect } from "react";

function Example() {
  // 可以设置多个 useState;
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      // 在组件卸载时执行
      //  If your effect returns a function, React will run it when it is time to clean up:
      console.log('测试')
    }
  },[]);// Only re-run the effect if count changes 
  // 数组里面可以存储状态 指定改变的状态执行useEffect
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
