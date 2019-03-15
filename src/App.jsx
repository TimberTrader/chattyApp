/* eslint-disable no-console */
import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anon'},
      messages: [],
      users: 0
    };

    this.connection = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {

    setTimeout(() => {
      const newMessage = {
        type: 'incomingNotification',
        username: '',
        content: 'Welcome to ChattyApp!  Type your name below then TAB and say hello'
      };
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 500);

    this.connection.onopen = () => {
      console.log('we have something going on')
    };

    this.connection.onmessage = (event) => {
      const incomingEvent = JSON.parse(event.data);

      if (incomingEvent.type === 'activeUsers') {
        this.setState( {users: incomingEvent.count} )
      } else {
        const oldMessages = this.state.messages;
        const newMessages = [
           ...oldMessages,
           incomingEvent
         ]
       this.setState({messages: newMessages});
      
      }
    }
  }
    
    changeName = (event) => {
        let lastUsername = this.state.currentUser.name;
        let newUsername = event.target.value;
        
        if (lastUsername === newUsername) return;

        this.setState({currentUser: {name: newUsername}}, () => {
          let newJSONContent = {
            type: 'postNotification',
            content: `${lastUsername} changed their username to ${newUsername}`
          }
          this.connection.send(JSON.stringify(newJSONContent));
        })
    }

    postChat = (event) => {
      if (event.key === 'Enter') {
          let newJSONContent = {
            type: 'postMessage',
            username: this.state.currentUser.name,
            content: event.target.value
          }
          this.connection.send(JSON.stringify(newJSONContent));
          event.target.value = '';
     }
    }
  
    render() {
      return (
        <div>
          <Navbar 
            userCount={this.state.users}
            />
          <MessageList
            messages={this.state.messages}
            />
          <Message />
          <ChatBar
            currentUser={this.state.currentUser}
            postChat={this.postChat}
            changeName={this.changeName}
            />
        </div>
      );
    }
  }

export default App;
