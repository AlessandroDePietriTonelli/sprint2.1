//ejercisio 1
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = [...arr1,...arr2]
console.log('ejerciso 1:' + arr3) 

//ejercisio 2

function suma(...a) {
    let resultado = 0
    a.forEach(function(n){
        resultado += n
    })
    return resultado
}

console.log(suma(1,2,3))