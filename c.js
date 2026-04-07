const p=new Promise( (res,rej)=>{
    let done=false
    settimeout(()=>{
        if(done){
            res("work is done!")
        }else{
            rej("work is not done")    
    }
},5000)
})
console.log(p)