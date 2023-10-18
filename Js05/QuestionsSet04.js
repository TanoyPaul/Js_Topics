// Js practice set on Strings

/*
Q: 01 =>
What will the following print in Js ?
*/
console.log("har\"".length);// Since  ' /" ' is considered as a single character
/*
Q: 02 =>
Explore the includes, startswith & endswith functions of a string
*/
const bunchOfWords = "Js is my favourite .";
const word = 'Js';
console.log(bunchOfWords.includes(word));
console.log(`The word "${word}" ${bunchOfWords.includes(word) ? 'is' : 'is not'} in the sentence`);

let text = "Hello world, welcome to the universe.";
let position = text.startsWith("Hello",0);
console.log(position);

let text1 = "Hello World";
let result = text1.endsWith("World");
console.log(result);

/*
Q: 03 =>
Write a program to convert a given string to lowercase
*/
let myName = "Tanoy";
console.log(myName.toLowerCase());
/*
Q: 04 =>
Extract the amount out of this string "Please give Rs 1000"
*/
let string = "Please give Rs 1000"
let amount = Number.parseInt(string.slice("Please give Rs ".length));
console.log(typeof(amount));
console.log(amount);
/*
Q: 05 =>
Try to change the 4th character of a given string. Are we able to do it ?
*/
let str2 = "strang";
str2[3] = "i"; // We're not able to update the existing string since strings are immutable
console.log(str2);