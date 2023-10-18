alert("Enter the value of a :");
let a = prompt("Enter a here : ", "345");
a = Number.parseInt(a);


let write = confirm("Do you really want to enter a :");
if(write){
    alert("You entered a of type " + (typeof a));
    document.write(a);
}
else{
    alert("Please allow me to write ! ");
    
}
