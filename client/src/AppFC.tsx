import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SocketService } from './SocketService';
import { useChat } from './ChatContext';

const App: React.FC = () => {

  const [messageState, setMessageState] = React.useState({
    messages: ['Type a message and press Send Message to continue the chat.']
  });

  const [input, setInput] = React.useState('');

  const chat: SocketService = useChat();
  const init = 1;

  React.useEffect(() => {
    const observable = chat.onMessage();

    observable.subscribe((val: any) => {
      let messages = messageState.messages;
      console.log('messages before:');
      console.log(messages);
      messages.push(val);
      setMessageState({ messages: messages });
    });
  }, [init])


  const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  }

  const handleMessage = (): void => {
    chat.send(input);
  };

  let i = 0;

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="App-chatbox">
        {messageState.messages.map((msg: string) => {
          i++;
          return (
            <p key={i}>{msg}</p>
          );
        })}
      </div>
      <input
        className="App-Textarea"
        placeholder="Type your messsage here..."
        onChange={updateInput}
        value={input}
      />
      <p>
        <button onClick={() => { handleMessage() }}>
          Send Message
          </button>
      </p>
    </div >
  );
}

export default App;
