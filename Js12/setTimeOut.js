document.write("hello");

let ClearTimeout = setTimeout(
    (a,b) => {
    console.log("it's running",a+b);;
    }, 3000, 1,2
);// setTimeOut(function, delay, arguements);
clearTimeout(ClearTimeout);