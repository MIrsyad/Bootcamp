const fs = require('fs');

class Task1{

    readDir(){
        const janji = new Promise((res, rej) =>  {
            let dir =fs.readdir('/',(rej(new Error('gagal menampilkan')), res(result)));
            return this;
        });         
        janji.then((res => {console.log(result);}))
        .catch((error) => {console.log(error);})
    }
}

const task = new Task1()
task.readDir();
// fs.readdir('/', (err, result) => {
//     if (err) {
//       throw new Error(err.message)
//     }
//     console.log(result)
//   })