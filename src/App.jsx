import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DisplayMessages />
        <Chatbar />
      </div>
    );
  }
}

class Navbar extends App {
  render() {
    return (
      <nav className="navbar">
         <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }}

class DisplayMessages extends App {
  render() {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username">Anonymous1</span>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    )
  }}
class Chatbar extends App {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}
 
export default App;
