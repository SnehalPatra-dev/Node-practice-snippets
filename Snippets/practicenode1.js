/* To find out the total available memory and the free memory
    Execute node files with command: node practicenode1.js
*/

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

/*  In order to work with the Operating System on Node, we need the os module  */

var str1 = `Total memory available: ${totalMemory}`;
var str2 = `Free memory available: ${freeMemory}`;

console.log(str1);
console.log(str2);
