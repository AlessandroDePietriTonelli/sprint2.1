//ejercisio 1

function addFour(a) {
    console.log(`Ejerciso 1:  ${a + 4}`);
}

function procesar(n, addFour) {
    addFour(n)
}

procesar(8, addFour);

//ejerciso 2

function calculadora(num1,num2,sum) {
    sum(num1,num2)
}

function sum(a,b) {
    console.log(`Ejerciso 2:  ${a + b}`) ;
}

calculadora(2,3,sum);