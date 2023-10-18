let num = [1,2,3,6,7,8,0];
let num1 = num.toString();
console.log(num1);
console.log(typeof(num1));

let num2 = num.join(" & "); // join
console.log(num2);

let r = num.pop(); // pop
console.log(num, r);

console.log(num.length); // delete(it is not an method but an operator)
delete num[0];
console.log(num);
console.log(num.length);
console.log(num[0]);

let t = [1,2,3,4]; // concat
let p = [9,80,7,6]; 
let o = [5,0]

let newArray = t.concat(p,o);
console.log(newArray);
console.log(t,p,o);

newArray.sort(); // sort (sorts according to first number, here 80 will come before 9 since 8 < 9 )
console.log(newArray);

let compare = (a,b) => {  // compare function
    return  a - b ;
}
let Arr = [23,454,645,43,6,98,12,-45];
Arr.sort(compare);
console.log(Arr); 
console.log(Arr.reverse()); // reverse

let nums = [0,1,2,3,4,5,6,7,8];
nums.splice(2,4,200,202,204,206,208); // array.splice(index number, number of elements for deletion, numbers to insert in the place of deletion)
console.log(nums);