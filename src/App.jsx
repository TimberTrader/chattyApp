import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

const userData =
    { currentUser: {name: 'BobAnon'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
      {
        username: 'Bob',
        content: 'Has anyone seen my marbles?'
      },
      {
        username: 'Anonymous',
        content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
      }
    ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData };
  }

  /*
  
    this.setState({
    (previous.posts)
    })
  this.setState({
      count: this.state.count + 1
    })
  */

  // componentDidMount() {
  //   // After 3 seconds, set `loading` to false in the state.
  //   setTimeout(() => {
  //     this.setState({loading: false}); // this triggers a re-render!
  //   }, 3000)
  // } 

  render() {
    return (
      <div>
        <Navbar />
        <MessageList />
        <Message />
        <ChatBar />
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
