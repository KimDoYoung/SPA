
//1. producer
const promise = new Promise( (resolve, reject) => {
    console.log("executoer run....");
    setTimeout(()=>{
        // resolve('elite....'); 
        reject(new Error('no network'));  
    }, 2000);
});

//2. consumer : then, catch, finally
promise
    .then( value => {
        console.log(value); //elite....
    })
    .catch( error => {
        console.log(error)
    })
    .finally( ()=>{
        console.log('finally...');
    } );

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num =>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(num -1)
            }, 1000)
        });
    })
    .then(num => {
        console.log(num);
    });

const getHen = () => 
    new Promise( (resolve, reject) => {
        setTimeout(()=> resolve('닭'), 1000);
    }) ;   
const getEgg = hen => 
    new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(`${hen}->계란`)
        }, 1000);
    });
const cook = egg => 
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${egg}->후라이드`);
        }, 1000)
    })  ;  

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    ;
getHen()
    .then(getEgg)    
    .catch(error => { return '빵';})
    .then(cook)
    .then(console.log)
    .catch(console.log)
    ;
