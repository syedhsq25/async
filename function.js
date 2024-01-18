import axios from "axios";

function getApi(){
    axios.get(`https://github/users.com/`)
            
    .then((res)=>{
        console.log(res.data)
    })
    
    .catch((error)=>{
        console.log("something wrong w url")

    }
    )
}
getApi()