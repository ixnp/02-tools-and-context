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

module.exports.Fp = Fp;
