const numeros = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]

const manipolarArr = numeros => numeros.filter(numero => numero >= 10).map(numero => numero * 2).reduce((cont,numero) => cont + numero, 0)

console.log(manipolarArr(numeros))

