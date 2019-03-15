import React, {Component} from 'react';

/*renders chatbar - allows for TAB (preffered),
ENTER or 'click in -message' to trigger name change event*/
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
        onKeyPress={this.changeNameOnEnter}
        onBlur={this.props.changeName}
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