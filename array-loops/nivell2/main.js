//ejercisio 4

let obj = { 
    nom: 'Ona',
    edat: 25,
    ciutat: 'Barcelona'
};

for (key in obj) {
    console.log(`${key}: ${obj[key]}`)
}


//ejercisio 5

let numeros = [1, 2, 3, 4, 5, 6];

for (let num of numeros){
    console.log(num)
    if(num === 5){
        break
    }
}