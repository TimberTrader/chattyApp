import React, {Component} from 'react';

class Message extends Component {
  render() {
    // const userName = userData.currentUser.name
    return (
    <div className='message'>
      <span className='message-username'>{ this.props.name }</span>
      <span className='message-content'>{ this.props.content }</span>
    </div>
    // <div className="message system">
      // Anonymous1 changed their name to nomnom.
    // </div>
    )
  }
}

Message.propTypes = {
  messageDetails: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`messageDetails is expecting an object but got ${typeof obj}`);
  },
}


export default Message;