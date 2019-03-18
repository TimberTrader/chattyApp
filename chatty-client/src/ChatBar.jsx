import React, {Component} from 'react';

/* renders chatbar - allows for TAB (preffered),
ENTER or 'click in chatbar-message(onBlur)' to trigger name change event*/

class ChatBar extends Component {
// a local state of username is set until event is triggered
  state = { currentUser: this.props.currentUser }

// if user clicks ENTER this will also be event like BLUR events
  changeNameOnEnter = (event) => {
    if (event.key === 'Enter') {
      this.changeNameOnBlur(event)
    }
  }
/* if user enters name and changes focus to 'cb-message' thru clicking in same or TAB
 .... then event is passed to App ... unless empty then Anon is passed*/
  changeNameOnBlur = (event) => {
    this.props.changeName(event);
    if(!event.target.value) this.setState({ currentUser: { name: 'Anon' } })
  }

  // changes username state as user types in name but it is now local until ENTER or BLUR event is triggered.
  handleNameChange = (event) => {
    const currentUser = { name: event.target.value }
    this.setState({ currentUser });
  }

  render() { 
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Ur name and TAB to enter message (Optional)"
        value={this.state.currentUser.name}
        onKeyPress={this.changeNameOnEnter}
        onBlur={this.changeNameOnBlur}
        onChange={this.handleNameChange}
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