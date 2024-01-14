import axios from "axios";
console.log("i am first")
axios.get("https://api.github.com/users")
    .then((res)=>{
    
        console.log(res.data);
        console.log("I am last")
    })
        .catch((error)=>{
            console.log("something went wrong with url")
        });

        /*
        import axios from 'axios';

        axios.get('');
        .then((res)=>{
            clg()

        })
        .catch((error)=>{
            clg("error")
        })

        */
