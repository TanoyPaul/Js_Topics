/*
A collection of any type of datatypes is called as an array in js. Unlike other programming languages js allows any type of data in it's array !
*/

const array = ["app","web",3,4,5];
console.log(array[0]);
console.log(array.length);
array[0] = "AI";
console.log(array);

// Arrays : Methods =>

// Check the position of any element :

console.log(array.indexOf(5));
console.log(array.indexOf(6));

// Check if the array is present in the array or not :

console.log(array.includes("AI"));

// To push an element in the array :

array.push("ML");
console.log(array);

// To add an element in front the array :

array.unshift("MERN");
console.log(array);

// To delete the last element of the array : 

array.pop();
console.log(array);

// From 2nd element till (5-1)th element of the array will be printed :

const subArray = array.slice(2,5);
console.log(subArray); 