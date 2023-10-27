let p1 = new Promise(
    (resolve, reject) => {
        console.log("Promise is Pending !");
        setTimeout(
            () => {
                console.log("This promise is resolved .");
                resolve(true);
            },3000
        )
    }
)

let p2 = new Promise(
    (resolve, reject) => {
        console.log("Promise is Pending !");
        setTimeout(
            () => {
                console.log("This promise is rejected .");
                
                reject(new Error("An error occured !"));
            },3000
        )
    }
)

p1.then(
    (value) => {
        console.log(value);
    }  
)

p2.then(
    (value) => {
        console.log(value);
    },
    (error) => {console.log(error);} 
)