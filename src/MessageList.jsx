import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    
    const messageDetails = this.props.messages.map(details => {
      let messageID = details.id;
      let name = details.username;
      let content = details.content;
      return <Message key={messageID} name={name} content={content}/>
      });
  
    return (
      <main className="messages">
         {messageDetails}
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
