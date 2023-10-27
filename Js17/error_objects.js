
try {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);

    if(age > 150){
        throw new Error("This is probably not true .")
    }
    else{
        alert("Your age is "+age);
    }
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

}
console.log("The script is running.");