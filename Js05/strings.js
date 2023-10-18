// Template literals

let boy1 = "Koli";
let boy2 = "Sumo";
let sentence = `${boy1} is a friend of ${boy2} .`;
console.log(sentence);

// Escape sequence characters

let fruit = "Bana\'na";
console.log(fruit);

// Methods 

let name = "Tanoy";
let newName = name.replace("oy","u");
console.log(newName);

let myFriend = "Krishna !";
console.log(name.concat(" is a friend of ", myFriend));

let someone = "         someone";
console.log(someone);
console.log(someone.trim());

// Q: Use a for loop to print a string

let str = "JavaScript";
for(let index = 0; index < str.length; index++){
    console.log(str[index]);
}