//ejercisio 5

function myFunction(a,b,c){
    console.log(a,b,c)
}

const myArray = ['hola','que','tal']

myFunction(...myArray)

//ejercisio 6

const objecto1 = {
    nombre: 'Riccardo',
    edad: 34
}

const objecto2 = {
    comida: 'pizza',
    bebida: 'coca cola'
}

const nuevoObjecto = {
    ...objecto1,
    ...objecto2
}

console.log(nuevoObjecto)