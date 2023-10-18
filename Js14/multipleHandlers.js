let p1 = new Promise (
    (resolve, reject) => {
       
        setTimeout(
            () => {
                resolve(5);
            }, 2000
        )
       
    }
)
// Two then methods can be handled by js parallelly
p1.then(
    
    (value) => {
        console.log(value);
        setTimeout(
            () => {
                console.log("Congo Boi, you did it !");
            }, 2000
        )
    }
)

p1.then(
    () => {
        console.log("hooo");
        let p2 = new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve("p2 will be returned")
                    }, 4000
                )
            }
        )
        return p2;
    }
).then(
    (value) => {
        console.log(value);
        console.log("Completed ✅");
    }
)