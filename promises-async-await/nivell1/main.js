//ejercisio 1

const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Hola mundo')
    }, 2000);
});

//ejerciso 2

promesa.then((message) =>{
    console.log(message)
})

//ejercisio 3

const promesaConInput = (input) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(input === 'Hola'){
                resolve('Hola')
            } else {
                reject('error')
            }
        },2000)
    })
}

//ejercisio 4

async function myFunction() {
    const result = await promesa
    console.log(result)  
}

myFunction()