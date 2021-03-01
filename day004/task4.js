const axios = require('axios').default;
const url = `https://mul14.github.io/data/employees.json`;

function getData(callback){
    const data = axios.get(url)
    .then(function (result) {
        //handle resolve
        const data = result.data;
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

    let higherSalary = data.filter(match => match.salary > 1500000)
    console.log(higherSalary);
}

function findLive(returnedData){
    console.log('======================Number two======================');
    const data = returnedData;

    let findLive = data.filter((match) => {
        let foundJakarta = false

        const thatLifeOn = match.addresses.filter((f2) => {
            return f2.city==='DKI Jakarta'? foundJakarta=true: null;
        })

        console.log({def: foundJakarta});
        return foundJakarta? match : null
    })
    console.log({findLive}); //bedanya menggunakan {} dan tidak apa?
    }

function findBirthday(returnedData){
    console.log('======================Number three======================');
    const data = returnedData;

    let foundBirthday = data.filter(match => match.birthday.slice(5,7)=== '03')
    console.log(foundBirthday);
    }

function findDepartment(returnedData) {
    console.log('======================Number four======================');
    const data = returnedData;

    let findDepartment = data.filter(match => match.department.name =='Research and development')
    return findDepartment
}

function countAbssences(returnedData) {
    console.log('======================Number five======================');
    const data = returnedData;

    let countbulan = data.map(c => {
        let match = c.presence_list.filter((f) => {
            return f.slice(5,7) == '10'
            })
        
        c.absenOktober = match.length
        return c
    })
    // console.log(c);
    console.log(countbulan);
   }

// getData(findHigherThanSalary);
// getData(findLive)
// getData(findLive);
// getData(findBirthday);
// getData(findDepartment);
// getData(countAbssences)