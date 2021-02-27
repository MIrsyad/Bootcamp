const axios = require('axios').default;
const url = `https://mul14.github.io/data/employees.json`;

function getData(callback){
    const data = axios.get(url)
    .then(function (result) {
        //handle resolve
        const data = result;
        callback(data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
}

function findHigherThanSalary(returnedData){
    console.log('======================Number One======================');
    const data = returnedData;
    for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        let salary = element.salary;
        if (salary > 15000000) {
            console.log(element);
        }
    }
}

function findLive(returnedData){
    console.log('======================Number two======================');
    const data = returnedData;
    for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        for (let indexx = 0; indexx < element.addresses.length; indexx++) {
            let tempatTinggal = element.addresses[indexx].city;
            if (tempatTinggal === `DKI Jakarta`) {
                console.log(element);
        }
        }
    }
    }

function findBirthday(returnedData){
    console.log('======================Number three======================');
    const data = returnedData;
    console.log(`trying to find data match`);
    
    let isFound = false;
    for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index].birthday;
        // console.log(element.slice(5,7));
        if (element.slice(5,7) === `03`) {
            isFound = true;
            console.log(data.data[index]);
        }else if (index === data.data.length-1 && isFound === false) {
            console.log("tidak ditemukan data user yang lahir di bulan march");
        }
    }
    }

function findDepartment(returnedData) {
    console.log('======================Number four======================');
    const data = returnedData;

    let isFound = false;
    for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        const department = element.department.name;
        if (department === `Research and development`) {
            isFound = true;
            console.log(element);
        }else if (index === data.data.length-1 && isFound === false) {
            console.log("tidak ditemukan data user yang berada di research and development");
        }
    }
}

function countAbssences(returnedData) {
    console.log('======================Number five======================');
    const data = returnedData;
    let counted=[];
    for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];
        const abssence_list = element.presence_list;
        let count=0;
        abssence_list.forEach(element => {
            let bulanAbsen = element.slice(5,7);
            if (bulanAbsen == 10) {
                count ++;
            }
        });
        counted.push({userid:index, jumlahMasuk:count});
    }
    for (let index = 0; index < counted.length; index++) {
        const element = counted[index];
        console.log(element);
    }
   }

getData(findHigherThanSalary);
getData(findLive);
getData(findBirthday);
getData(findDepartment);
getData(countAbssences)

