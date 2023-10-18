let promise = new Promise(
    (resolve, reject) => {
        alert("hello");
        resolve(56);
    }
)

console.log("hello one");

setTimeout(
    () => {
        console.log("heloo two in 2 secs ");
    }, 3000
)

console.log("hello three");

/*
fetch google.com homepage => console.log("google.com homepage loaded");
fetch data from the data api
fetch pics from the server
print downloading
*/