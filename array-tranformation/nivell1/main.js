//ejerciso 1

const numerosMap = [1,2,3,4]

const cuadrados = numerosMap.map(numero => numero * numero)

console.log(cuadrados)

//ejercisio 2

const numerosFilter = [1,2,3,4]

const numerosPari = numerosFilter.filter(numero => numero % 2 == 0)

console.log(numerosPari)

//ejerciso 3

const numerosFind = [1,10,8,11]

const masDiez = numerosFind.find(numero => numero > 10)

console.log(masDiez)

//ejercisio 4

const numerosReduce = [13,7,8,21]

const suma = numerosReduce.reduce((count,numero) => count + numero, 0)

console.log(suma)