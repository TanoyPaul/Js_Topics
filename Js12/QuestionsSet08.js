// Q: 03 -> Repeat Q: 02 using event listeners 

let twitter = document.getElementById("Twitter");
twitter.addEventListener(

    "click", () => {
        window.location = "https://twitter.com";
        window.focus();
    }

)

/*
Q: 04 ->
Write a js program to keep fetching contents of a website (every 5 seconds)
*/

setInterval(
    async function(){
        let url = "link";
        console.log(await fetchContent(url));
    }, 3000
);

/*
Q: 05 -> 
Create a glowing bulb effect using classlist toggle method in js.
*/