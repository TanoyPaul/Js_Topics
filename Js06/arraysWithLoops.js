let arr = [2,3,5,7,8];

arr.forEach( // forEach
(element) => {
    console.log(element * element);
}
);


let name = "Tanoy"; // from
let array = Array.from(name);
console.log(array);

let nums = [1,2,3,4,5]; // for of
for(let i of nums){
    console.log(i);
}

let items = [3,2,5,87,8]; // for in
for(let index in items){
    console.log(index," : ", items[index]);
}