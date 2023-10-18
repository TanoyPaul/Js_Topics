// Practice set on loops and functions :

/*
Write a program to print the marks of a student in an object using for loop.
obj = {tanoy: 46, sumo: 50, koli: 48}
*/
let marks = {
    tanoy: 46,
    sumo: 50,
    koli: 48
}
for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[ Object.keys(marks)[i] ]);
}
/*
Q: 02 =>
Write the program in Q: 01 using for in loop 
*/

for(let key in marks){
    console.log("The MARKS of " + key + " is " + marks[key]);
}
/*
Q: 03 =>
Write a program to print "try again" until the user enters the correct number.
*/
// let correctNumber = 4;
// let i ;
// while (i != correctNumber){
//     console.log("Try again !");
//     i = prompt("Enter a number : ") // prompt in js is not supported by vs code , supported in browser and replit
// }
// console.log("Correct number entered !");

/*
Q: 04 =>
Write a function to find mean of 5 numbers :
*/

const avgOfFiveNumbers = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}

console.log(avgOfFiveNumbers(1,2,3,4,5));