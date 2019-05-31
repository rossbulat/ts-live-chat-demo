import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatContext } from './ChatContext';

class App extends React.Component {
  static contextType = ChatContext;

  state = {
    messages: ['Welcome! Type a message and press Send Message to continue the chat.'],
    input: ''
  }

  componentDidMount () {
    const observable = this.context.onMessage();

    observable.subscribe((val: string) => {
      let messages = this.state.messages;
      messages.push(val);
      this.setState({ messages: messages });
    });
  }

  componentWillUnmount () {
    this.context.disconnect();
  }

  render () {

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ input: e.target.value });
    }

    const handleMessage = (): void => {
      if (this.state.input !== '') {
        this.context.send(this.state.input);
        this.setState({ input: '' });
      }
    };

    let msgIndex = 0;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-chatbox">
          {this.state.messages.map((msg: string) => {
            msgIndex++;
            return (
              <p key={msgIndex}>{msg}</p>
            );
          })}
        </div>
        <input
          className="App-Textarea"
          placeholder="Type your messsage here..."
          onChange={updateInput}
          value={this.state.input}
        />
        <p>
          <button onClick={() => { handleMessage() }}>
            Send Message
          </button>
        </p>
      </div>
    );
  }
}

export default App;
