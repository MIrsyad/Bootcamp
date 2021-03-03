const fs = require('fs');

const databases = require('./var.json');

function findHarga(){
    const hargaUnder = databases.filter((f) => {
        return f.price < 150
    })
    return hargaUnder
}
console.log(findHarga);