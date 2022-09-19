import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterful', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>
  {
    console.log('Please turn of the motor');
  },3000);
  
});

console.log("Script is running");
myEmitter.emit('waterful');
console.log("Script is still running")
myEmitter.emit('waterful');
// myEmitter.emit('event');