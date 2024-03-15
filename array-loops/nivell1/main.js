//ejercisio 1
let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(function(name){
    console.log(name)
})

//ejercisio 2

for (let name of noms){
    console.log(name)
}

//ejerciso 3

let numeros = [1, 2, 3, 4, 5, 6];

const numPar = numeros.filter(numero => numero % 2 == 0);

console.log(numPar)