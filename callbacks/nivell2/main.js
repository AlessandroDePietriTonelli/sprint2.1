//Ejerciso 3

function myFunction() {

    let name = document.getElementById('name').value;

    function saludar(a) {
        document.getElementById('result').innerHTML =
        `Hola ${a}`;
    }

    function esperarISaludar(a, callback) {
       setTimeout(callback, 2000, a);
    }

    esperarISaludar(name, saludar);

}

//Ejercisio 4

function myFunction2() {

    let myArr = [1,2,3,4,5,6,7,8,9,10];

    function callback(x) {
        console.log(x *2)
    }

    function processarElements(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            callback(arr[i])
        }
    }

    processarElements(myArr, callback)
        
    }    



