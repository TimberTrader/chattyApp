import React, {Component} from 'react';

// renders incomingMessage or incomingNotification as provided by MessageList
class Message extends Component {
  render() {
  const { type, name, content } = this.props;
    return type === 'incomingNotification' ? 
    (
    <div className='message system'>
      <span className='message-content'>{content}</span>
    </div>
    ) : (
    <div className='message'>
      <span className='message-username'>{name}</span>
      <span className='message-content'>{content}</span>
    </div>
    )
  }
}
//  eliminates validation errors on props (replaces react proptypes)
Message.propTypes = {
  name: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`messageDetails is expecting an object but got ${typeof obj}`);
  },
   content: function(obj) {
     if(typeof obj === 'object') return null;
     throw Error(`messageDetails is expecting an object but got ${typeof obj}`);
  },
  type: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`messageDetails is expecting an object but got ${typeof obj}`);
 }
}

export default Message;