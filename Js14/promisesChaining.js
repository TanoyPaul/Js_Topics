// let p1 = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 console.log("Resolved");
//                 resolve(9);
//             }, 3000
//         )
//     }
// )

// p1.then(
//     (value) => {
//         console.log(value);

//         let p2 = new Promise((resolve, reject) => {
//             setTimeout(
//                 () => {
//                     resolve("Resolved Again")
//                 }, 3000
//             )
//         })
//         return p2;
//     }     
// ).then(
//     (value) => {
//         console.log(value);
//         setTimeout(
//             () => {
//                 console.log("We're done");
//             },2000
//         )
//         return 2;
//     }
// ).then(
//     (value) => {
//         console.log(value);
//         setTimeout(
//             () => {
//                 console.log("Finally done");
//             }, 3000
//         )
//     }
// )


const loadScript = (src) => {
    let p = new Promise(
        (resolve, reject) => {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
            document.body.appendChild(script);
            script.onload = (script) => {
                resolve("Script is loaded");
            }
            script.onerror = () => {
                reject("Script Rejected")
            }
        }
    )
    return p;
}

let p1 = loadScript("https://google.com");
p1.then(
    (value) => {
        console.log(value);
        return p1;
    }
).then(
    (value) => {
        // console.log(value); Since there is no work done in the previous then method, so there will be logged the same line as previous.
        console.log("Second Script");
    }
).catch(
    (error) => {
        console.log("Error occured");
    }
)