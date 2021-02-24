let array = [];
let result = [[],[],[],[],[],[],[],[],[],[]];

for (let index = 0; index < 1000; index++) {
    array[index]=Math.ceil(Math.random()*100);
}

console.log("array random :"+array);

array.forEach(element => {
    // console.log(element);
    
    if (element<=10) {
        result[0].push(element)
    } else if(element<=20){
        result[1].push(element)
    } else if(element<=30){
        result[2].push(element)
    } else if(element<=40){
        result[3].push(element)
    } else if(element<=50){
        result[4].push(element)
    } else if(element<=60){
        result[5].push(element)
    } else if(element<=70){
        result[6].push(element)
    } else if(element<=80){
        result[7].push(element)
    } else if(element<=90){
        result[8].push(element)
    } else{
        result[9].push(element)
    }

});

// console.log("array kelompok 10:"+result[0]);
// console.log("array kelompok 20:"+result[1]);
// console.log("array kelompok 30:"+result[2]);
// console.log("array kelompok 40:"+result[3]);
// console.log("array kelompok 50:"+result[4]);
// console.log("array kelompok 60:"+result[5]);
// console.log("array kelompok 70:"+result[6]);
// console.log("array kelompok 80:"+result[7]);
// console.log("array kelompok 90:"+result[8]);
// console.log("array kelompok 100:"+result[9]);

 // urut besar ke kecil
 for (let index = 0; index < result.length; index++) {
    result[index].sort(function(a, b) {
      return a - b;
    });
  }

  //total tiap kelompok
  const summedArray = [[],[],[],[],[],[],[],[],[],[]] 
  for (let index = 0; index < result.length; index++) {
    let sum=0;
    for(let element of result[index]){
      sum=sum+element;
    }
    summedArray[index]=sum;
  }

// ara ara tiap kelompok
const average = [[],[],[],[],[],[],[],[],[],[]] 
    for (let index = 0; index < result.length; index++) {
      average[index] = summedArray[index]/result[index].length;
    }
console.log(average[0]);

//max
const max = [[],[],[],[],[],[],[],[],[],[]]
    for (let index = 0; index < result.length; index++) {
      max[index]=Math.max(...result[index]);
    }
console.log(max[6]);