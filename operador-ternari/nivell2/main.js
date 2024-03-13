function myFunction() {

    let num = Number(document.getElementById('num').value);
    let message = (num > 0) ? 'positivo' : (num < 0) ?  'negativo' : 'zero';

    document.getElementById('result1').innerHTML = message;
}

document.getElementById('btn1').addEventListener('click',myFunction);


function myFunction2() {

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

   function  trobarMaxim(a,b,c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c)
   }

   document.getElementById('result2').innerHTML = `El numero maximo es ${trobarMaxim(num1,num2,num3)}`

  

}

document.getElementById('btn2').addEventListener('click',myFunction2);