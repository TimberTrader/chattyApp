# chattyApp
a project for LhL Web Dev Bootcamp (winter 2019

chattyApp is a single page application (SPA) allowing connected users to chat through text in real time. 

##The App
Multiple users can interact with one another in real time. ChattyApp allows the user to join the fun immediately
without having to log-in. Users can text each other anonymously or under any user handle they can think of
… they can change names anytime they want and still stay connected. The system will message all the users anytime
anyone makes a name change.
Simply connect through a url in the browser’s address bar and then add a name … any name … or no name at all
to the chat bar located at the bottom of your browser:

**TAB over or move your mouse directly into the chat field and type away.**
There are no character limits so tell a long story or a short one all the possibilities are is open to you.

##The Project
It is one of three individual projects that I have created tbrough 5 weeks of Lighthouse Labs’ Web Development Bootcamp.
chattyApp demonstrated an implementation of Websockets to enable real time communication.
Using  JSX I built a number of React components that rendered a single page application.
SPA’s dynamically rewrite the current page rather than loading entire new pages from a server.

This project was built over three days. It also demonstrates the use of .git and Github in managing a project for a single developer. Inadvertently, a significant rework of the version control was undertaken at th end in order to merge two existing repositories into the one you are currently visiting. An excellent learning opportunity which resulted in much of the commit history being preserved.

##Getting started
Chatty App requires two servers: one to manage the real time communication and the other to send the app to the client.
Each server will listen on differnet ports and wil apss JSON ommunication between them.

###For each folder (server):
 
-> Install all dependencies (using the npm install command) -> a list is found in the repsective Package.josn files
-> Run the web server using the npm run start command in the terminal while inside the folder directory.
-> you can connect multiple browser tabs and/or mtiple browsers to localhost:3000 connect as a client


