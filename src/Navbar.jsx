import React, {Component} from 'react';

// renders nav bar with user count display
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="active-users">There are {this.props.userCount} users online!</p>
      </nav>
    )
  }
}

//  eliminates validation errors on props (replaces react proptypes) ... test
Navbar.propTypes = {
    userCount: function(obj) {
      if(typeof obj === 'object') return null;
      throw Error(`messageDetails is expecting an object but got ${typeof obj}`);
    }
  }

export default Navbar;