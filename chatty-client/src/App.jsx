import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import Navbar from './Navbar.jsx';

/* Parent class  state modified to delete old messages and user count */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anon'},
      messages: [],
      users: 0
    };
    // sets new web socket for each instance of App
    this.connection = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {
    /*on load - sends welcome notification w/ brief instruction for 
    optimal way to begin chat*/ 
    setTimeout(() => {
      const newMessage = {
        type: 'incomingNotification',
        username: this.currentUser.name,
        content: 'Welcome to ChattyApp!  Type your name below then TAB and say hello'
      };
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 500);
    //  sets event listener on messages from server
    this.connection.onopen = () => {
      console.log('we have something going on')
    };
    
    // recieves messages -- produces new object
    this.connection.onmessage = (event) => {
      const incomingEvent = JSON.parse(event.data);

      /* checks if message contains user count sets state of user count ...
      otherwise updates [{messages}] with chat messages and/or notifications ...
      sets state for [{messages}]*/
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

  handleNameChange = (ev) => {
    const currentUser = { name: newName }
    this.setState({ currentUser });
  }
    /* updates state IF user changes name (default is anon) ...
     send notification to all users who are logged on of name change*/
    changeName = (event) => {
        let lastUsername = this.state.currentUser.name;
        let newUsername = event.target.value || 'Anon';
        
        if (lastUsername === newUsername) return;

        this.setState({currentUser: {name: newUsername}}, () => {
          let newJSONContent = {
            type: 'postNotification',
            content: `${lastUsername} changed their username to ${newUsername}`
          }
          this.connection.send(JSON.stringify(newJSONContent));
        })
    }
    /* updates state WHEN user adds a chat message (content) ...
     sends thier name an d content to all users who are logged on of name change*/
    postChat = (event) => {
      const userInput = event.target
      if (event.key === 'Enter' && userInput.value) {
          let newJSONContent = {
            type: 'postMessage',
            username: this.state.currentUser.name,
            content: userInput.value
          }
          this.connection.send(JSON.stringify(newJSONContent));
          userInput.value = '';
     }
    }
    /* sends props and/or function s to children ...
     renders all elements tio single page app*/
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
            handleNameChange={this.handleNameChange}
            />
        </div>
      );
    }
  }

export default App;
