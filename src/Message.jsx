import React, {Component} from 'react';

class Message extends Component {
  render() {
    // const userName = userData.currentUser.name
    return (
    <div className="message">
      <span className="message-username">Bob</span>
      <span className="message-content">I won't be impressed with technology until I can download food.</span>
    </div>
    // <div className="message system">
      // Anonymous1 changed their name to nomnom.
    // </div>
    )
  }
}

export default Message;