/*  To list down all the files in the current directory
    Execute node files with command: node practicenode1.js
*/
const fs = require('fs');

/* In order to work with files on Node, we require the fs module.*/

const files = fs.readdirSync('./');

/*  This is the synchronous handling of requests */

console.log(files);