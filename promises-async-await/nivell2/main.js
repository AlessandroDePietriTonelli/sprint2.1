//ejercisio 5
const miPromesa = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('Hola mundo')
    },2000)
}) 

async function trovaError() {
    try {
        const result = await miPromesa
        console.log(result)
    } catch (error) {
            console.log(error)
    }
}

trovaError()