import React, {
  useState
} from "react";
import ReactDOM from "react-dom";
import Example from "./components/Example.jsx";
import FriendStatus from './components/FriendStatus';
import ChatRecipientPicker from './components/ChatRecipientPicker';
import "./styles.css";

function App() {
  const [status, setStatus] = useState(true)
  const word = FriendStatus({
    friend: {
      id: status
    }
  })
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
      <div>{word}</div>
      <ChatRecipientPicker/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);