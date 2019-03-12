import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

const data =
    { currentUser: {
      name: 'Bob'
    }, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [
    {
      id: 1,
      username: 'Bob',
      content: 'Has anyone seen my marbles?'
    },
    {
      id: 2,
      username: 'Anonymous',
      content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.data.messages} />
        <Message />
        <ChatBar currentUser={this.state.data.currentUser} />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
         <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }}

export default App;
