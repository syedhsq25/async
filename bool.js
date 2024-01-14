var bool=true
console.log(bool)
setTimeout(()=>{
    console.log(bool)

    bool=false;
    console.log(bool)
    
},5000)
setTimeout(()=>{

    while(bool)
    {console.log("loading ...")}


},9000)