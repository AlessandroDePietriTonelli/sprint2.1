function myFunction() {

   const tempMess = (a) => {
    setTimeout(() => {
        console.log(a)
    }, 3000)
   }

   let message = document.getElementById('message').value;

   tempMess(message);
}



document.getElementById('btn').addEventListener('click',myFunction);