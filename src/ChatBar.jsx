import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class ChatBar extends Component {
  render() { 
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Ur name and TAB to enter message (Optional)"
        onKeyUp={this.props.changeName}
        // defaultValue={ this.props.currentUser.name }
        />
        <input
        onKeyPress={this.props.postChat}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

ChatBar.propTypes = {
  postChat: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`expecting an object but got ${typeof obj}`);
  },
  changeName: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`expecting an object but got ${typeof obj}`);
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