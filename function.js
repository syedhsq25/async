import axios from "axios";
import readlineSync from "readline-sync";

function aPi(){
    const name= readlineSync.question(`enter your username `)
    return axios.get(`https://api.github.com/users/${name}`)


}

aPi()
.then((res)=>{
    console.log("the number of followers are  ",res.data.followers)

})
.catch((error)=>{
    console.log("error")
})