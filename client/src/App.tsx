import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="App-chatbox">
        {/* Chat messages here */}
      </div>

      <p>Type a message and press <b>Send Message</b> to add to the chat.</p>

      <textarea
        className="App-Textarea"
        placeholder="Type your messsage here..."
      >
      </textarea>
      <p>
        <button onClick={() => { }}>
          Send Message
          </button>
      </p>
    </div>
  );
}

export default App;
