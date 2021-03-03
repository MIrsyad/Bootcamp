#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

// Simplest program ever: this program does only one thing
program
.argument("<name>", "nama user")
.option("--greating <word>", "Greating to use", {
    default: "Hello",
  })
.argument("<umur>", "umur anda")
.argument("<alamat>", "alamat anda")
.argument("[number...]", "multi number")
.action(({ logger ,args }) => {
    const {name} = args;
  logger.info("Hello, world!")
  logger.info(`Halo ${name}`)
})

.command("tambahn","menambahkan total dari number")
.

// always run the program at the end
program.run()

/* 
# Now, in your terminal:

$ ./hello-world.js
Hello, world!

*/