"use strict"

// forEach map filter reduce

// let fp ={};

// function ixEach(arr, callback){
//     let result = [];
//     for (let i=0; i < arr.length; i++){
//         let result = callback(e)
//         let results.push(result)
//     }
//     return resultsl
// }

const Fp = {};

Fp.ixforEach=(arr, cb) => {
    let forEachArr = [];
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        let result = cb(e);
        forEachArr.push(result);
    }
    return forEachArr;
}

Fp.ixMap = (arr, cb) => {
    let mappedArr = [];
    for(let i = 0; i < arr.length; i++){
       let e = arr[i];
       let result = cb(e)
       mappedArr.push(result)
    }
    return mappedArr;
}

Fp.ixFilter = (arr, cb) => {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        let e = arr[i];
        if(cb(e) === true){
            filteredArr.push(e);
        }
    }
    return filteredArr;
}

Fp.ixReduce = (arr, cb, initialValue) => {
    console.log(cb)
   
  var reducer = initialValue;
  for(let i = 0; i < arr.length; i++){
     let total = cb(reducer += arr[i]); 
    }
    return reducer;
  }
module.exports.Fp = Fp;
