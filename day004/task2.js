let string =[];
const janji = new Promise((res, rej) => {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            if (i===3) {
                string.push(`${i}`,`Done`)
                string = string.join(',');
                res(string);
            }else{   
                string.push(`${i}`)
            }
        }, 1000);
    }
})

janji.then((result) => {
    console.log(result);
})