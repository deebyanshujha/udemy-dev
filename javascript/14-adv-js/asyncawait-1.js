function fetchUserdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve({name : "chaicode", url: "https://chaicode"});
        },3000)
    })
}

async function getData(){
    try{
        console.log("fetching user data...");
        let data = await fetchUserdata();
        console.log(data);
        console.log("data fetched.");
    }catch(error){
        console.log(error);
    }
}

getData();