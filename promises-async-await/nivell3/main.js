const promesa1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Hola')
    },2000)
})

const promesa2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('mundo')
    },3000)
})

Promise.all([promesa1,promesa2])
        .then((result) => {
            console.log(result)
        })