import axios from "axios";

const users=['roland','defunkt','anotherjesse']

for(let i=0;i<=users.length;i++){
    axios.get(`https://api.github.com/users/${users[i]}`)

.then((res)=>{
    console.log(res.data.followers)
})
.catch((error)=>
{
    console.log("this is an error")
}
)
}