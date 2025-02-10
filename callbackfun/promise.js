console.log('this is promises');

let prom1 = new Promise((resolve ,reject)=> {
    let a = Math.random();
    if (a< 0.5){
        reject("No rangit initdom number was not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done")
            resolve("Harry")
        }, 3000);
    
    }
})

prom1.then((a) =>{
    console.log(a)
})