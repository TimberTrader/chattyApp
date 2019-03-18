import React, {Component} from 'react';
import Message from './Message.jsx';

/* iterates over [{messages} either Messages or Notifications]
 rendering each to display container  */
class MessageList extends Component {
  render() {
    let messageDetails = this.props.messages.map(details =>
      <Message
        key={details.id}
        name={details.username}
        content={details.content}
        type={details.type}
        />
      )
     
    return (
      <main className="messages">
         { messageDetails }
      </main>
      )
    }
  }

export default MessageList;

//  eliminates validation errors on props (replaces react proptypes)
MessageList.propTypes = {
  messages: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`MessageList is expecting an object but got ${typeof obj}`);
  },
}
