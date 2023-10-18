let array = [2,3,4,5,6,9];
const red_func = (h1, h2) => {
    return h1 + h2 ;
}
let newArray = array.reduce(red_func);
console.log(newArray);