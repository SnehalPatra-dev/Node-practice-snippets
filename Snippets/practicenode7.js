/* HTTP module: It can be used to listen to a port. When we run an application, the server listens to a port. When a request is made, an event is raised. We can use the on method to handle the event. */

const http = require('http');
const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection');
});
server.listen(3000);

console.log('Listening on Port 3000');