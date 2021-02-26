const fs = require('fs');

class Task1{

    readDir(){
        const janji = new Promise((res, rej) =>  {
            fs.readdir('/',(err,result) => {
                if(err){
                    rej(err);
                }else{
                    res(result);
                } 
            });
            return this;
        });         
        janji.then((res => {console.log(res);}))
        .catch((error) => {console.log(error);})
    }
}

const task = new Task1()
task.readDir();