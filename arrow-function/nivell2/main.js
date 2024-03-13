function myFunction() {
    const arr = [1,2,3,4,5];
    const printNumbers = numbers => {
     
            for(let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
        }
    printNumbers(arr);
    }
document.getElementById('btn').addEventListener('click',myFunction)