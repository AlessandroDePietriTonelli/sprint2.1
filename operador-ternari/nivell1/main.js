function myFunction() {
    let age = Math.floor(document.getElementById('age').value);
    
    const potConduir = n => (n >= 18) ? 'Pots conduir' : 'No pots conduir'

    document.getElementById('result1').innerHTML = potConduir(age);

}

document.getElementById('btn1').addEventListener('click', myFunction);

function myFunction2() {

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let message = (num1 > num2) ? 'num1 és més gran' : 'num2 és més gran' ; 

   
    
    document.getElementById('result2').innerHTML = message
}

document.getElementById('btn2').addEventListener('click',myFunction2)