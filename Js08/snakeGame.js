let playAgain = true;

while(playAgain){

   let user = prompt("Enter snake,water or gun :");
let cpuRandom = Math.ceil(Math.random() * 3);

let cpu = ["snake","water","gun"][cpuRandom];

const match = (cpu, user) => {
    if(cpu === user){
        return "enter new input"
    }
    else if (cpu === "snake" && user === "water"){
       return "cpu"; 
    }
    else if (cpu === "snake" && user === "gun"){
        return "user"; 
     }
     else if (cpu === "water" && user === "gun"){
        return "cpu"; 
     }
     else if (cpu === "water" && user === "snake"){
        return "user"; 
     }
     else if (cpu === "gun" && user === "water"){
        return "user"; 
     }
     else if (cpu === "gun" && user === "snake"){
        return "cpu"; 
     }
}
let result = match(cpu, user);
alert(`CPU: ${cpu} \n USER: ${user} \n The winner is : ${result}`)

   
}