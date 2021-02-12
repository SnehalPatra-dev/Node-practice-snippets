/* Extending the EventEmitter- we will now use our own class and extend the EventEmitter as well
  Instead of using an instance of EventEmitter, we will use an instance of the custom class we have defined
*/
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', function (arg) {
    console.log('Listener called', arg);
});
logger.log('Message here!');

/* Note that 'Message here!' will be displayed first. The logger function is a callback. So it will be called later.   */