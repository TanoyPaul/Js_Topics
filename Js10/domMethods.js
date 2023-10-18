/*

Mathches, Closest & Contains Methods ->

    01. elem.matches -> To check if element matches the given css selector.
    02. elem.closest -> To look for the nearest selector that matches the given css-selector. The element itself is also checked.
    03. elem.contains -> Returns true if elemB is inside the elemA or when elemA == elemB.

*/

let id1 = document.getElementById("id1");
id1.style.color = "brown";
id1.style.background = "#ebf2ff";
document.getElementById("sp").style.color = "white";
console.log(id1);

console.log(id2.matches(".classH2"));
console.log(id1.matches(".classH2"));
console.log(id1.closest(".container"));
console.log(sp.closest("id1"));
console.log(id1.contains(id1));