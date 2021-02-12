const EventEmitter = require('events');
var url = 'http://abc.com';
class Logger extends EventEmitter {
    // Now we can use all the methods of EventEmitter class in our code
    log(message) {
        //send an HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;