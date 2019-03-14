/* eslint-disable no-console */
import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anon'},
      messages: []
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.connection = new WebSocket('ws://localhost:3001');
}
  
  componentDidMount() {

    setTimeout(() => {
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 500);

    this.connection.onopen = () => {
      console.log('we have something going on')
    };

    this.connection.onmessage = (event) => {
      let inJSON = JSON.parse(event.data);
      let newContent = {
       id: inJSON.id,
       username: inJSON.username,
       content: inJSON.content
      };
     console.log(newContent);

     const oldMessages = this.state.messages;
     const newMessages = [
        ...oldMessages,
        newContent
      ]
    this.setState({messages: newMessages});
    }
  }
    
    eventHandler(event) {
      if (event.key === 'Enter') {
        console.log(event.target.className);
        if (event.target.className === 'chatbar-message') {
          let newJSONContent = {
            username: this.state.currentUser.name,
            content: event.target.value
          }
          console.log('logdata from message' +newJSONContent)
          this.connection.send(JSON.stringify(newJSONContent));
          event.target.value = ''
          }
          this.setState( {currentUser: {name: event.target.value} })
     }
    }
    render() {
      return (
        <div>
          <Navbar />
          <MessageList
            messages={this.state.messages}
            />
          <Message />
          <ChatBar
            currentUser={this.state.currentUser}
            eventHandler={this.eventHandler}
            />
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
