import axios from "axios";
import readlineSync from "readline-sync"

const users=["mojombo","defunkt","pjhyett","wycats"]



users.forEach(ele => {
    axios.get(`https://api.github.com/users/${ele}`,
    {
        auth:"syedhsq25",
        Password:"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"
    })
    // {
    //    
    // })
    .then((res)=>{
        // console.log(res.data.id)
        // users.forEach(element => {
            console.log(`names and the ids of the peoplee are `,res.data.login)
            
            

            console.log(`  followers for the names ${res.data.login}`,res.data.followers)
            console.log(`following of the people ${res.data.login}`,res.data.following)
        // });
    })
    .catch((error)=>{
        console.log(error)
    
    })
});
