#!/usr/bin/env node

//import libraries
var fs = require('fs');
const databases = fs.readFileSync('./index.json');
const obj = JSON.parse(databases);

// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

// Simplest program ever: this program does only one thing
program
.command("list", "show to do list")
.action(({logger}) => {
    obj.forEach(element => {
        logger.info(`${element.id}. ${element.message}`)
    });
})
.command("add", "Adding new item list")
.argument("<id>", "Id of the list item")
.argument("<Message>", "The message list you want to remember")
.action(({args}) => {
    const {id, message} = args;
    const isIdFound = obj.some(element => element.id == id)
    if (databases==null) {
        let string = [{id, message}];
        let myJson = JSON.stringify(string)
        fs.writeFile('index.json', myJson, (err) => {
            if (err) throw err ;
            console.log('saved new file!');
        })
    } else if(isIdFound){
        console.log("the id number already used");
    }else{
        obj.push({id: id,message: message})
        let myJson = JSON.stringify(obj)
        fs.writeFile('index.json', myJson, (err) => {
            if (err) throw err ;
            console.log('saved!');
        })
    }
})
.command("update", "change the message of list, based on id")
.argument("<id>", "id message that want to change")
.argument("<Message>", "The message list you want to remember")
.action(({args}) => {
    const {id, message} = args;
    const isIdFound = obj.some(element => element.id == id)
    if (isIdFound) {
        const indexfound= obj.findIndex(element => element.id == id)
        obj[indexfound] = {id, message}
        console.log(obj);
        let myJson = JSON.stringify(obj)
        fs.writeFile('index.json', myJson, (err) => {
            if(err) throw err;
        })
    } else {
        console.log(`tidak ditemukan data dengan id ${id}`);
    }
})
.command("delete", "delete list berdasarkan id")
.alias("del")
.argument("<id>", "id untuk yang mau dihapus")
.action(({args}) => {
    const {id} = args;
    const isIdFound = obj.some(element => element.id == id)
    if (isIdFound) {
        const indexfound= obj.findIndex(element => element.id == id)
        obj.splice(indexfound, 1)
        let myJson = JSON.stringify(obj)
        fs.writeFile('index.json', myJson, (err) => {
            if(err) throw err;
        })
    } else {
        console.log(`tidak ditemukan data dengan id ${id}`);
    }

})
.command("clear", "menghapus semua todo list")
.action(() => {
    obj.splice(0,obj.length)
    let myJson = JSON.stringify(obj)
    fs.writeFile('index.json', myJson, (err) => {
        if(err) throw err;
    })
})
.command("done","set a list into completed list")
.argument("<id>", "id you want to set completed")
.action(({args}) => {
    const {id} = args;
    const isIdFound = obj.some(element => element.id == id)
    if (isIdFound) {
        const indexfound= obj.findIndex(element => element.id == id)
        obj[indexfound].status='done'
        console.log(obj);
        let myJson = JSON.stringify(obj)
        fs.writeFile('index.json', myJson, (err) => {
            if(err) throw err;
        })
    } else {
        console.log(`tidak ditemukan data dengan id ${id}`);
    }
})
.command("undone","set a list into uncompleted list")
.argument("<id>", "id you want to set completed")
.action(({args}) => {
    const {id} = args;
    const isIdFound = obj.some(element => element.id == id)
    if (isIdFound) {
        const indexfound= obj.findIndex(element => element.id == id)
        obj[indexfound].status='0'
        console.log(obj);
        let myJson = JSON.stringify(obj)
        fs.writeFile('index.json', myJson, (err) => {
            if(err) throw err;
        })
    } else {
        console.log(`tidak ditemukan data dengan id ${id}`);
    }
})
// always run the program at the end
program.run()

/* 
# Now, in your terminal:

$ ./hello-world.js
Hello, world!

*/