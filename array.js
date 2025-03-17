 arr=[1,6,8,3];
 console.log(arr);
// // EMCAScript 2022 also introduces new  ..at()method in arrays which helps to index from last elements too easily;
// // object where you can use the for of loop

// //array as object
console.log(typeof arr);

// // using array constructor
 let fruits=new Array('apple','orange','banana');
 console.log(fruits);

// // using array literals
 let fruits1=['apple','orange','banana'];
 console.log(fruits1);


//accessing an array elements
 let fruits=['apple','banana','orange',1];
 console.log(fruits[0]);
 console.log(fruits[1]);
 console.log(fruits[2]);
 console.log(fruits[3]);

//modifying element

 for(let i of fruits){
     console.log(i);

 }
 for(let i in fruits){
   console.log(i);

 }
let fruits = ['apple', 'banana', 'orange', 'chikku', 'papaya', 'watermelon'];
 fruits.forEach((curEle, index, arr) => {
     console.log(`${curEle} ${index}`);
 });

//let fruits = ['apple', 'banana', 'orange', 'chikku', 'papaya', 'watermelon'];
// fruits.map((curEle, index, arr) => {
//     console.log(`${curEle} ${index}`);
// // });
// let myForEachArray=fruits.forEach((curElem,index,arr)=>{
//     return `${curElem} ${index}`
// })
//console.log(myForEachArray);
/* The code `let myForMap=fruits.map((curElem,index,arr)=>{ return ` ` })` is
creating a new array `myForMap` by using the `map` method on the `fruits` array. */
// let myForMap=fruits.map((curElem,index,arr)=>{
//     return `${curElem} ${index}`
// })
// console.log(myForMap);


// fruits[2]='mango';
// console.log(fruits[2]);
// console.log(fruits);

//Q1) write a program to multiply each element by 2 using forEach
// const number=[1,2,3,4,5];
// number.forEach((curEle)=>{
//     console.log(curEle*2);
// })
//Q2) write a program to multiply each element by 2 using forMap
// const number=[1,2,3,4,5];
// number.map((curEle)=>{
//     console.log(curEle*2);
// })
//let names=['ram','kahna','vishnu','narayan'];
// console.log(names);
// names.push('raghav');
// console.log(names);
// names.pop();
// console.log(names);
// console.log(names.push("bam"));//add at the end of the array
// console.log(names.pop());//deletes from the end of the array
// console.log(names);

// console.log(names.unshift("raghav"));//adds at the beginning of the array
// console.log(names);
// console.log(names.shift());//removes at the beginnig of the array
// console.log(names);

//<<<splice method>>>>
//<<<splice(start,deleteCount,item1,item2);
// console.log(names.splice());// always returns an empty arrray
// console.log(names);
// console.log(names.splice(1,1,"krish","prabhu","hari"));
// console.log(names);

//<<<<searching in an array>>>>
// names.splice(-1,0,"vasudev");
// console.log(names);
// names.splice(names.length,0,"sarvanthar");
// console.log(names);

// const numbers=[1,2,3,14,15,6,4,5,6,7,8,9];
// console.log(numbers.indexOf(4,2));
// console.log(numbers.includes(6));
// console.log(numbers.lastIndexOf(6))

//q) Update march to March 
// const months=["jan","feb","march","april","june","july"];
// let result=months.splice(2,1,"March");
// console.log(result);
// console.log(months);

//--------filters in arrays--------
const numbers=[1,2,3,4,5,6,7,6,8,8,9];
// //-----find method find the first element in an array
const result=numbers.find((curElem)=>{
     return curElem>8;
 });
 console.log(result); 
let value=6;
let updateToCart=numbers.filter((curElem)=>{
    return curElem!== value;
});
console.log(updateToCart)
