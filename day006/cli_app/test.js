const fs = require('fs')

let id = 2
let message = "this is message"

console.log({id, message});

fs.appendFile('test.json', {id, message}, (err) => {
    if (err) throw err ;
    console.log('saved!');
})