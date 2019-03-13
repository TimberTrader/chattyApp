/* eslint-disable no-console */
import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name: 'Bob'
        },
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
    };
    this.addNewMessage = this.addNewMessage.bind(this);
}
  
  componentDidMount() {
    
    setTimeout(() => {
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }
  
    addNewMessage(event)  {
      console.log('hello world');
      const oldMessages = this.state.messages;
      if (event.key === 'Enter') {
        let newContent = event.target;
        console.log(newContent);
        const newMessages = [
          ... oldMessages,
          { username: this.state.currentUser.name,
            content: newContent.value
          }
        ]
      this.setState({messages: newMessages})
      console.log(this.state.messages);
      newContent.value = '';
      }
    }

    render() {
      return (
        <div>
          <Navbar />
          <MessageList messages={this.state.messages} />
          <Message />
          <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage}/>
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
