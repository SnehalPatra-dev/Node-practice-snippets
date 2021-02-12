/* Event module : Event is any incident that happens on an http request.
Any request made on host raises an event.
Here we will work with the EventEmitter-which is a pre-defined class in Node library
 */
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function () {
    console.log('Listener called');
});

/*  A Listener is a function that is called everytime an event is raised. When we raise an event, we need a Listener to respond to the event. */

//Raise an event
emitter.emit('messageLogged');

/* Note that when we call the emit() method, the method goes through the list of all the registered listeners and calls them synchronously. Hence we need to register the Listener before calling the emit() method */