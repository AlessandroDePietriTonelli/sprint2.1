//ejercisio 1

function myFunction1 () {
    let num1 = Number(document.getElementById('numUno').value);
    let num2 = Number(document.getElementById('numDos').value);

    const SUMA = (a,b) => a + b;

    document.getElementById('result1').innerHTML = SUMA(num1,num2);
}

document.getElementById('btn1').addEventListener('click',myFunction1);

//ejercisio 2

function myFunction2() {

const randomNumber  = () => Math.random() * 100;

document.getElementById('result2').innerHTML = Math.floor(randomNumber());
}

document.getElementById('btn2').addEventListener('click',myFunction2);

//ejercisio 3


function myFunction3() {
   
    class Person {
        constructor(name) {
            this._name = name
        }
    
        greet = () => {
            console.log(`Hola ${this._name}!`);
          }
    }
    

    let nombre = document.getElementById('name').value;

    const persona = new Person(nombre);

    persona.greet();  
}




