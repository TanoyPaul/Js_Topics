console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = document.body.childNodes;
console.log(arr);// nodelist
// array methods don't work on nodelist
arr = Array.from(arr);
console.log(arr); // array
let Arr = document.body.firstChild;
console.log(Arr.parentNode);
console.log(Arr.parentElement);
// parentNode returns any node of a html doc, even a text node . Whereas, parentElement returns any kinda html element only but not an element as text node since it isn't a html element.
