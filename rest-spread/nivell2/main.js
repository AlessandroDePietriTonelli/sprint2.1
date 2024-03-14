//ejercisio 1

const gato = {
    nombre: 'Miss',
    color: 'blanco',
    edad: 12
}

const gato2 = {...gato}

gato2.nombre = 'Libero'

console.log(gato)
console.log(gato2)

//ejerciso 2

const arr = [1,2,3,4,5,6,7,8,9,10]

const [var1, var2, ...rest] = arr
console.log(var1)
console.log(var2)
console.log(rest)