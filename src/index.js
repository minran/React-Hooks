import React, { useState } from "react";
import ReactDOM from "react-dom";
import Example from "./components/hook1.jsx";
import "./styles.css";

function App() {
  const [status, setStatus] = useState(true)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick = { () => {
        setStatus(!status);
      }}> change components status</button>
      {
        status && <Example />
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
