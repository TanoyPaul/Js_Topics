/*
Q:01 =>
Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive or not.
*/
let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true:false ;
}

while(runAgain){
    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);

    if(age < 0){
        console.error("Please enter a valid age !"); // Q: 03 => console log the error if age < 0
        break;
    }

    if(canDrive(age)){
        alert("You can drive !")
    }
    else {
        alert("Being a minor, you can't drive .");
    }
    runAgain = confirm("Do you want to enter the age again ?"); /*
    Q:02 =>
    In Q:01 use confirm to ask the user if he wants to see the prompt again.
    */
}

