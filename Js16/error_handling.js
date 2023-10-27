setTimeout(
    () => {
        console.log("Wifi Hacking... wait please...");
    },1000
)

try{
    // setTimeout(
    //     () => {  // It'll not handle the error since it is an asynchronous code, but try can only handle synchronous code.
    //         console.log(rahul);
    //     },100
    // )
    console.log(rahul);
}
catch(err){
    console.log(err);
}

setTimeout(
    () => {
        console.log("Wifi Hacked !");
    },2000
)

setTimeout(
    () => {
        console.log("Password and username retrieving...");
    },3000
)