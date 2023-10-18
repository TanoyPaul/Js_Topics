/*
Js only hoists declarations, not initializations. The variables will be undefined until the line where its initialized is reached.
With let and var, hoisting is different.
*/

greet();
function  greet() {
    console.log("Good morning ");
}

console.log(a);
var a = 9;
console.log(a);
