/*
The node:os module provides operating system-related utility methods 
and properties. It can be accessed using:
 const os = require('node:os);
*/
const os = require('node:os');

console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.uptime())