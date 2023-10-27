async function buds(){
    let delW  = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                resolve("30 Degrees")
                },1000
            )
        }
    )
    
    let bengW  = new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                resolve("28 Degrees")
                },2000
            )
        }
    )
    
        console.log("Fetching weather of Delhi, wait...");
        let delhiWeather = await delW;
        console.log("Fetched the weather : "+ delhiWeather);
        console.log("Fetching weather of Bengal, wait...");
        let bengalWeather = await bengW;
        console.log("Fetched the weather : "+ bengalWeather);
        return[delhiWeather, bengalWeather];

}

console.log("Weather control room : ");

let a = buds();
a.then(
    (value) => {
        console.log(value);
    }
)

