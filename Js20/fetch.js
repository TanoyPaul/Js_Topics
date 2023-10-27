fetch('https://reqres.in/api/users',
{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user 01'
    })
}
)
.then(
    (res) => {
        if(res.ok){
            console.log('successful');
        }
        else{
            console.log('not successful');
        }
        return res.json();
    }
)
.then(
    (data) => {
        console.log(data);
    },
    (err)=>{
        console.log(err);
        console.log("Error occured");
    }
)
