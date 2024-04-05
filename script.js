//! arrow function = a concise way to write function expressions
//!                  good for simple functions that you use only once
//?                  (parameters) => some code

// function hello(){
//     console.log("Hello");
// }

// const hello = function(){
//     console.log("Hello");
// }

//* Arrow function

// const hello = () => console.log("Hello");
// hello();

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)}

// hello("Linkx", 19);

//? example1

// setTimeout(hello, 3000);

// function hello(){
//     console.log("Hello");
// }

//* arrow function in example1

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

//* more concise example1

// setTimeout( () => console.log("Linkx"), 3000);

//? arrow function with map, filter and reduce 

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);