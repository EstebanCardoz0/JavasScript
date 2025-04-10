let array = [-2, -5, -7, -15, -5, -100, -55,-88];

function cuantosPositivos(arr) {
    let aux = 0;
    for (let num of arr) {

        if(num>0){
            aux++;
        }

    }

    if (aux === 0) {
        return `No existen números positivos en el array`
    } else {
        return `Existen ${aux} números positivos en el array`
    }
}
let resultado = cuantosPositivos(array);
console.log(resultado);