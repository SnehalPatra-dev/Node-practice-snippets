/* To list down all the files in the current directory using Asynchronous function module
    Execute node files with command: node practicenode1.js  */
const fs = require('fs');

/*  Now we will look into the Asynchronous form of the method. Asynchronous methods take a function as the last argument. This is referred to as callback. This function has 2 parameters, of which only one will have value- either an error or a result */

fs.readdir('C:/Users/', function (err, files) {
    if (err) console.log('ERROR!', err);
    else console.log('Result:', files);
});