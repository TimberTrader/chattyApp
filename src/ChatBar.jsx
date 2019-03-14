import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class ChatBar extends Component {
  render() { 
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Your name and hit enter to change (Optional)"
        onKeyPress={this.props.eventHandler}
        // defaultValue={ this.props.currentUser.name }
        />
        <input
        onKeyPress={this.props.eventHandler}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

ChatBar.propTypes = {
  eventHandler: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`Current user is expecting an object but got ${typeof obj}`);
  },
  // addNewMessage: function(obj) {
  //   if(typeof obj === 'object') return null;
  //   throw Error(`addNewMessage is expecting an object but got ${typeof obj}`);
  // },
  // addNewUser: function(obj) {
  //   if(typeof obj === 'object') return null;
  //   throw Error(`addNewUser is expecting an object but got ${typeof obj}`);
  // }
}

export default ChatBar;