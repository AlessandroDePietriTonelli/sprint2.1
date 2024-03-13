function myFunction() {
    const arrNum = [1,2,3,4,5,6,7,8,9,10];

    function parOImpar(arr) {
        for (let i = 0; i < arr.length; i++) {
            (arr[i] % 2 == 0) ? console.log('par') : console.log('impar')
        }
    }

    parOImpar(arrNum);


}

document.getElementById('btn').addEventListener('click',myFunction)

