import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, setMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  // console.log(inputMessage);
  const handleSubmit = (event) => { 
    setGreetingMessage(inputMessage);
    event.preventDefault();
    // alert(textUpdate);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <div className="greeting-container">{greetingMessage}</div>
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input id="greeting-message" type="text" value={inputMessage} onChange={(event) => setMessage(event.target.value)} />
        </div>

        <div className="buttons">
          <button type="submit">Update text</button>
        </div>
      </div>
    </form>
  );
}

export default App;
