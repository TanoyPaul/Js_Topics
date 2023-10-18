// Practice set on operators and conditionals :

/*
Q: 01 =>
Use logical operators to find whether the age of a person lies between 10 & 20.
*/
let age = 9;
if (age > 10 && age <= 20){
    console.log("Your age lies between 10 and 20 ");
}
else {
    console.log("Your age doesn't lie between 10 and 20 ");
}
/*
Q: 02 =>
Demonstrate the usecase of switch case statements in Js.
*/
let grade = "g";

switch(grade) {
    case "A":
        console.log("Excellent !");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Bad");
        break;
    default:
        console.log("Enter valid grade !");
}
/*
Q: 03 =>
Write a Js program to find whether a number is divisible by 2 and 3 .
*/
let num = 6;
if(num % 2 == 0 && num % 3 == 0){
    console.log("num is divisible by 2 and 3 both");
}
else {
    console.log("num is not divisible by both of 2 and 3");
}
/*
Q: 05 =>
Print "You can drive" or "You can't drive" based on age being greater than 18 using ternary operators.
*/
let myAge = 2;
myAge > 18 ? console.log("You can drive 🙌") : console.log("You can't drive 🚫");;