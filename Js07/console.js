console.log("Hey Nate !");
console.error("Error !");

let obj = {a:1 , b:2, c:3}; // table
console.table(obj);

let a = console.assert(51 > 61); // assert
console.log(a);

console.warn("Don't do it !");  // warn

console.time("For Loop : "); // calculate time
for (let i = 0; i < 5; i++) {
    console.log(233);    
}
console.timeEnd("For Loop : ");