const fs = require('fs');
/*    fs.readFile('file.txt', 'utf8', (err,data)=>{
      console.log(err,data);
})       */

// const a = fs.readFileSync('file.txt')
// console.log(a.toString());

 const a = fs.writeFileSync('file2.txt', "This is 2 file")
console.log(a);
console.log("File is being read")
/* yaxai hamro file.txt vnne file xaina so first ma ya herda ta suru mai
error dinu parne but yesle first ma sab kamskaxa ani tespaxi error read
garxa. this is why yo xi non blocking io model ho
euta kam nasaki arko kam suru grxa 
*/