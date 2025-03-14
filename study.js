// const numbers = [1,2,3,4,5]
// const doubled = numbers.map(num => num * 2)
// console.log(doubled)


// const makeMultiplier = function(multiplier) {
//     return function(number) { 
//         return number * multiplier;
//     }
// };
// const double = makeMultiplier(3);
// console.log(double(5));

// const makeMultiplier = multiplier => number => number * multiplier;
// const double = makeMultiplier(2)
// console.log(double(5))
// Iterates over each element in an array and executes a callback function.



// Iterates over each element in an array and executes a callback function.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.forEach(num => {
//     console.log(num);
// });


// Creates a new array by transforming each element with a provided function.
// const numbers = [1,2,3,4,5]
// const squares = numbers.map(num => num * num);
// console.log(squares)


// Creates a new array with all elements that pass the test implemented by the provided function.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers)

//Executes a reducer function on each element, resulting in a single output value.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sum = numbers.reduce((total, num) => total + num)
// console.log(sum)

// Returns the first element in the array that satisfies the provided testing function.

const users = [
    {id:1, name:'Peter'},
    {id:2, name:'Simon'},
    {id:3, name:'Rita'}
];
const user = users.find(user => user.id == 2)


const fruits = ['apple', 'banana', 'cherry'];




// mathUtils.js
export function add(a, b) {
    return a + b;
  }
  