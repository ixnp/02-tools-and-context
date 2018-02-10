"use strict";
const Fp = require ('../lib/fp.js').Fp;


describe("this is the map function it should return an array with double the value of each item in the array.", ()=>{
    it("should add one to each int in the array", () =>{
        let arr = [23,26,78,2,4,8,16];
        let double = (n) => {return 2*n};
        let cb = double;
        let result = Fp.ixMap(arr,cb);
        let expected = [46, 52, 156, 4, 8, 16, 32];
        expect(result).toEqual(expected);
    })
})


describe("this is the f-ill-tər function it should pass an array, check for a boolean and return the array with only the values that returned true .", ()=>{
    it("should add one to each int in the array", () =>{
        let arr = ['f','-','illlll',2,'ter',8,16,'-mpj funfunfunction'];
        let isStr = function callback(str){
          if(typeof(str) ==='string'){
            return true;
          }
        }
        let cb = isStr;
        let result = Fp.ixFilter(arr,cb);
        let expected = ['f','-','illlll','ter','-mpj funfunfunction'];
        expect(result).toBe(expected);
    })
})
// This made me switch my tobe to toEqual, why?//

