let a = document.getElementsByTagName("div")[0];
console.log(a);
// console.log(a.innerHTML);
// a.innerHTML = a.innerHTML + "<p>Nate !</p>";

let div = document.createElement("div");
console.log(div);
div.innerHTML = "<h1>Hey Nate! </h2>";
// a.append(div);
// a.prepend(div);
// a.before(div); // through out the element before the container class
 a.replaceWith(div);