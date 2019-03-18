import React, {Component} from 'react';

/* renders chatbar - allows for TAB (preffered),
ENTER or 'click in hatbar-message' to trigger name change event 
... will always dipslay a username (default = Anon)
... controlled input displays current state as username (defualt is Anon until changed)
... allows user to change default value to almost any name*/
class ChatBar extends Component {
  changeNameOnEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.changeName(event)
    }
  }

  render() { 
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Ur name and TAB to enter message (Optional)"
        value={this.props.currentUser.name}
        onKeyPress={this.changeNameOnEnter}
        onBlur={this.props.changeName}
        onChange={this.props.handleNameChange}
        />
        <input
        onKeyPress={this.props.postChat}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

//  eliminates validation errors on props (replaces react proptypes)
ChatBar.propTypes = {
  postChat: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`expecting an object but got ${typeof obj}`);
  },
  changeName: function(obj) {
    if(typeof obj === 'object') return null;
    throw Error(`expecting an object but got ${typeof obj}`);
  },
}

export default ChatBar;