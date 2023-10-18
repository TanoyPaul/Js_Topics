let cardTitle = document.getElementById("cardTitle");
cardTitle.style.color = "blue";

let cardTitleS = document.querySelectorAll(".card-title");
cardTitleS[1].style.color = "green";
cardTitleS[2].style.color = "brown";
console.log(cardTitleS);

/*
document.querySelectorAll ->
    Returns all elements inside an element matching the given css selector.

document.querySelector ->
    Returns the first element for the given css selector . A efficient version of elem.querySelector[0].
*/

document.querySelector(".this").style.background = "brown";
document.querySelector(".this").style.color = "black";
