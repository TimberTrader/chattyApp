import React, {Component} from 'react';

// renders incomingMessage or incomingNotification as provided by MessageList
class Message extends Component {
  render() {
  
    return (
    <div className='message'>
      <span className='message-username'>{ this.props.name }</span>
      <span className='message-content'>{ this.props.content }</span>
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
  }
}

export default Message;