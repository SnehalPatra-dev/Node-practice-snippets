/*  Demonstrating event arguments: when we need to pass message on messageLogged */
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function (arg) {
    console.log('Listener called', arg);
});

/*  A Listener is a function that is called everytime an event is raised. When we raise an event, we need a Listener to respond to the event. */

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://www.abc.com' });
