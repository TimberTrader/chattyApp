const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;

// Set the port to 3001 ... clients are set to 3000
const PORT = 3001;


// Make the express server serve static assets (html, javascript, css) from the /public folder
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// UUID infrastructure (default version)
const uuid = require('uuid/v1');

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket
wss.on('connection', (ws) => {
  console.log('Client connected');
  // logs active users & broadcasts to each user(client)
  // users only exist when they connect ... not required to sign in
    let activeUsers = {
      type: 'activeUsers',
      id: uuid(),
      count: wss.clients.size
    }
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(activeUsers));
        }
      });

  /* recieves messages Notifications(nameChange) or Messages(postChat) ...
  adds unique id to each message ... broadcasts to all users*/
  ws.on('message', (data) => {
    inboundMessage = JSON.parse(data);
    let outboundMessage;

    if (inboundMessage)
      switch(inboundMessage.type) {
        case ('postMessage'):
          outboundMessage = {
            type: 'incomingMessage',
            id: uuid(),
            username: inboundMessage.username,
            content: inboundMessage.content
          }
          break;
        case ('postNotification'):
          outboundMessage = {
            type: 'incomingNotification',
            content: inboundMessage.content,
            id: uuid(),
          }
          break;
        default:
          throw Error('no type')
      }
      // Broadcast to all
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(outboundMessage));
          }
        });

  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
