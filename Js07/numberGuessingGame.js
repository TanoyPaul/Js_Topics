/*
    Number Guessing Game
    User has to guess the number
    The user gets 3 chances to do so
*/
let userConsent = confirm("Welcome to the number guessing game !");
let computerNumber = Math.ceil(Math.random() * 100)

let counter = 1 ;
if(userConsent) {
    while (counter > 0) { // I have put here infinte loop because I want to put inputs by the user until it's the correct number guessed by the computer😉
        // logic of the game
        let usedGuess = prompt("Please enter a number ");
        if(usedGuess == computerNumber){
            alert("Congo! You guessed the right number.")
            break;
        }
        else if (usedGuess > computerNumber){
            alert("Greater number entered !")
        }
        else if (usedGuess < computerNumber){
            alert("Lesser number entered !")
        }
        
        
    }

    if(counter == 3){
        alert("Sorry ! 3 limits used. ")
    }
    

    // To restart and play the game again ->

    let restartOrNot = confirm("Do you want to play the game again ?");
    if(restartOrNot){
        location.reload();
    }
    else {
        alert("Ok, may be another time !😉");
    }
}
else {
    alert("Ok, may be another time !😉");
}