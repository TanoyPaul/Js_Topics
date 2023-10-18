/*
Q: 01 -> Create a navbar and change the color of its first element to red.
*/

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"; (This could be the answer code also of Q: 01)
document.getElementsByClassName("navbar")[0].firstElementChild.style.color = "red";

/*
Q: 02 -> Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.
*/
// Ans: 02 -> After viewing page source, I didn't find any tbody tag in the code, even if it was present in the elements in the browser.

/*
Q: 03 -> Creat an element with 3 children. Now change the color of first and last element to green.
*/
document.getElementsByClassName("division")[0].firstElementChild.style.color = "blue";
document.getElementsByClassName("division")[0].lastElementChild.style.color = "blue";
document.getElementById("li3").style.color = "pink";

/*
Q: 04 -> Write a js code to change bg of all <li> tags of Q: 03 to cyan.
*/

// document.querySelector(".division").style.background = "cyan"; (Q: 04 could be solved by this code also)

Array.from(
    document.getElementsByTagName("li")).forEach((element) => {
        element.style.background = "cyan";
    }
)

