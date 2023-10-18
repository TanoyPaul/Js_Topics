let id = document.getElementById("id");

let a = id.getAttribute("class");
console.log(a);
console.log(id.hasAttribute("cLAss"));
console.log(id.hasAttribute("style"));
id.setAttribute("cLAss","sachin")
// id.removeAttribute("cLAss");

// dataset
console.log(id.dataset);
console.log(id.dataset.game);
console.log(id.dataset.player);