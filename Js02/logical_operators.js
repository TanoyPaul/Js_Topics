// && operator :

let a = 1;

if (a > 0 && a < 2){
    console.log("Value of a is 1");
}
else {
    console.log("a is greater than 1");
}

// || operator :

let b = 2;

if (b < 3 || b > 1){
    console.log("Value of b is 2");
}
else {
    console.log("b is greater than 2");
}

// Additional : Ternary Operators =>

const marks = 40;
marks > 30 ? console.log("passed") : console.log("failed");