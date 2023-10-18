/*
maps create a new array by performing some operation on each array element, whether 
the forEach loop calls a function once for each array element.
*/

let arr = [23,55,77];
let a = arr.map(
    (element, index, array) => {
        console.log(element, index, array);
        return element + 1;
    }
)
console.log(a);