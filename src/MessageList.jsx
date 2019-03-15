/* eslint-disable no-console */
import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log(this.props.messages)
    let messageDetails = this.props.messages.map(details => {
      console.log(details)
      switch(details.type) {
        case 'incomingMessage':
          return <Message
            key={details.id}
            name={details.username}
            content={details.content}
           />;
        case 'incomingNotification':
          return <Message
            key={details.id}
            name='notification'
            content={details.content}
          />
        default:
        throw Error('no type')
      }
    })
    
      
    return (
      <main className="messages">
         { messageDetails }
      </main>
      )
    }
  }


export default MessageList;

MessageList.propTypes = {
  messages: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`MessageList is expecting an object but got ${typeof obj}`);
  },
}
