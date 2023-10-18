// Practice set on arrays

/*
Q: 01 =>
Create an array of numbers and take input from the user to add numbers to this array.
*/
let arr = [1,2,3,4,5];
console.log(arr);
let addNum = "9";  // As we can't take input using nodeJs
addNum = Number.parseInt(addNum);
arr.push(addNum);
console.log(arr);

/*
Q: 02 =>
add numbers to the above array until the added number is 0.
*/
// let array = [2,3,3,4,4];
// let b;
// do {
//     b = prompt("Enter Your Name: ");                 // This code works in browser only
//     b = Number.parseInt(b);
//     array.push(b);
// }
//     while(b != 0);
// console.log(array);

/*
Q: 03 =>
Filter for numbers divisible by 10 from a given array
*/

let nums = [10,14,20,25,30];

let filtered = nums.filter(
    (element) => {
        return element%10 == 0 ;
    }
);
console.log(filtered);

/*
Q: 04 => 
Create an array of square of given numbers.
*/
let collection = [1,2,3,4,5,6,7];
let square = collection.map( // we can't use forEach as we want to return the array, since forEach method doesn't return a new array
    (element) => {
        return element*element;
    }
);

console.log(square);

/*
Use "reduce" method to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated )
*/

let arr2 = [1,2,3,4,5,6];
let factorial = arr2.reduce(
    (h1, h2) => {
        return h1 * h2;
    }
);
console.log(factorial);