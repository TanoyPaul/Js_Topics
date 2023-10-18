let a = true;

console.log("The value of a is ",a);
console.log("The type of a is ", typeof(a));
a = Boolean(a);   // Type conversion 
console.log("The type of a is ", typeof(a));

/* 
Boolean to number is possible ,
Number to string is possible ,
*/

// String to number isn't possible to convert value and possible to convert type :

let d = "sTring";
console.log("Type of d is :",typeof(d));
console.log("Value of d",d);
d = Number(d);
console.log("Type of d is converted into :", typeof(d));
console.log("Value of d",d); // NaN : not any number 😁 

// String to boolean is possible : 
let e = "sTring";
console.log("Type of e is",typeof(e));
e = Boolean(e);
console.log("Value of e is",e);// If the string was empty it would have converted into false boolean value.
console.log("Type of e is",typeof(e));

// Boolean to String

let f = true;
console.log("Value of f ",f);
console.log("Type of f is ",typeof(f));

f = String(f);
console.log("Value of f is ",f);
console.log("Type of f is ",typeof(f));

