/*
Q: 01 
Write a program to to load a js file in browser using promises. Use .then() to display on alert when the load is complete.
*/

// const loadScript = async(src) => {
//     return new Promise(
//         (resolve, reject) => {
//             let script = document.createElement("script");
//             script.src = src;
//             script.onload = () => {
//                 resolve(src + " Done Success")
//             }
//             document.head.append(script);
//         }
//     )
// }

// let a = loadScript("https://google.com");
// a.then(
//     (value)=>{
//         console.log(value);
//     }
// )

/*
Q: 02
Write the same program from previous question and use async-await syntax.
*/

// const nate = async() => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://google.com");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// nate();

/*
Q: 03
Create a promise which rejects after 3 seconds. Use an async-await to get its value. Use a try catch to handle its error.
*/

// let p = () => {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(
//                 () => {
//                     reject(new Error("Error Occured !"))
//                 }, 3000
//             )
//         }
//     )
// }

// let a = async () => {
//    try{
//     let c = await p();
//     console.log(c);
//    }
//    catch(err) {
//     console.log(err);
//    }
// }
// a();

/*
Q: 04 
Write a program using Promise.all() inside an async-await to await 3 promises . Compare their results with the case where we await three promises one by one.
*/


let t1 = async() => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(10);
                },200
            )
        }
    )
}
let t2 = async() => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(20);
                },300
            )
        }
    )
}
let t3 = async() => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(30);
                },400
            )
        }
    )
}

const run = async() => {
    console.time("run");
    
    let p1 =  t1();
    let p2 =  t2();
    let p3 =  t3();

    let all = await Promise.all([p1,p2,p3]);

    console.log(all);
    console.timeEnd("run");
}
    

run()