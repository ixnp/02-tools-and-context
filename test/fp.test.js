"use strict";
const Fp = require ('../lib/fp.js').Fp;


describe("this is the map function it should return an array with double the value of each item in the array.", ()=>{
    it("should add one to each int in the array", () =>{
        let arr = [23,26,78,2,4,8,16];
        let double = (n) => {return 2*n};
        let cb = double;
        let result = Fp.ixMap(arr,cb);
        let expected = [46, 52, 156, 4, 8, 16, 32];
        expect(result).toEqual(expect.arrayContaining(expected));
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
        expect(result).toEqual(expect.arrayContaining(expected));
    })
})


describe("This reduce function will apply a callback against an accumulator and every element in the array to reduce it to a single value", ()=>{
    it("[23,26,78,2,4,8,16] should reduce to '157'", () => {
        let arr = [23,26,78,2,4,8,16];
        let initialValue = 0;
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        let cb = reducer;
        let result = Fp.ixReduce(arr,cb,initialValue);
        let expected = 157;
        expect(result).toBe(expected);
    })
})
