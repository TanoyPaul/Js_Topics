const items = {
    food: 500,
    drink: 800
};

let cart = 0;

function addToCart (parameter) {
    cart += parameter;
}

addToCart(items.food);
addToCart(items.drink);
console.log("Cart : ", cart);