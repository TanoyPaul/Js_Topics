/*
Q: 01 =>
Create a variable of type string and try to add a number to it .
*/
let t = "Tanoy";
let p = 1;
let K = t + p;
console.log(K);
/*
Q: 02 =>
Use typeof operator to find the datatype of the string tin last question .
*/
console.log(typeof(K));
/*
Q: 03 =>
Create a constant object in js . Can you change it to hold a number ?
*/
const obj = {
    name: "Tanoy",
    section: 1,
    isEvent: false
}
// obj = 1; // No, I can't change the constant object to hold a number.

/*
Q: 04 =>
Try to add a new key to the constant object in Q: 03 .
*/
obj["friend"] = "Sumo";
console.log(obj);
/*
Q: 05 =>
Write a program to creat a word-meaning dictionary of three words :
*/
const Dictionary = {
    Nate: "Child of Krishna!",
    Krishna: "Our Everything ❤️",
    Radhe: "Krishna's love 💙"
}
console.log(Dictionary["Radhe"]);
