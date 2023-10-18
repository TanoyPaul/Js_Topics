let x = () => {
    alert("hello");
};

let y = () => {
    alert("world")
}

button_id.addEventListener('click',x);
button_id.addEventListener('click',y);

let a = prompt("Enter your favourite number : ");

if(a == 2){
    button_id.removeEventListener('click',x);
};
