"use strict"
const Fp = {};

Fp.ixforEach=(arr, cb) => {
    let forEachArr = [];
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        let result = cb(e);
        forEachArr.push(result);
    }
 
}
// are you saying I don't have to return this for each?//
//because it doesn't pass if I don't//
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
  let reducer = initialValue;
  let accumulator = 0;
  for(let i = 0; i < arr.length; i++){
    var total = accumulator += cb(arr[i],reducer); 
   }
    return total;
  }
module.exports.Fp = Fp;
