const numeros = [11,12,13,14]

const todosNumeros = numeros.every(numero => numero > 10)

const algunosNumeros = numeros.some(numero => numero > 10)

console.log(todosNumeros)
console.log(algunosNumeros)