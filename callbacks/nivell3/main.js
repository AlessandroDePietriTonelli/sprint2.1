
function processarCadena(str, callback){
    let modStr = str.toUpperCase()
    callback(modStr)
}

function callback(str) {
    console.log(str)
}

let myStr = 'hola, que tal?'

processarCadena(myStr, callback)