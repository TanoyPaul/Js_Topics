function loadScript (src, passedFunction) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Script loaded : ",src);
        passedFunction(null, src)
    }
    script.onerror = function () {
        console.log("Script failed : ",src);
        passedFunction(new Error("Src got some error"))
    }
    document.body.appendChild(script);
    passedFunction(src);
};

function hello(error, src){

    if(error){
        console.log(error);
        return;
    }
    alert("Hello Boi " + src);
}

loadScript("https://fb.com",hello);