import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class ChatBar extends Component {
  render() { 
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        defaultValue={ this.props.currentUser.name }/>
        <input
        onKeyPress={this.props.addNewMessage}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

ChatBar.propTypes = {
  currentUser: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`Current user is expecting an object but got ${typeof obj}`);
  },
}

export default ChatBar;