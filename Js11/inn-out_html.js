/*
console.log shows the element dom tree, console.dir shows the element as an object with its properties.
tagname -> only exists for element nodes, nodename -> defined for any node (text, comment etc).
*/

let x = document.getElementsByTagName("span")[0];
console.log(x);
console.dir(x);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

/*
innerHTML is valid for element nodes only, not for any text node.
*/

console.log(document.body.textContent);