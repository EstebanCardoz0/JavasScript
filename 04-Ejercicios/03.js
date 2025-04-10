function getByIdx(arr, idx) {
    if (idx < 0) {
        return "el índice no puede ser menor que 0";
    }

    if (idx >= arr.length) {
        return "el índice no existe en el array";
    } else {
        return arr[idx];

    }
}

let resultado = getByIdx([1, 2, 5], 3);
console.log(resultado);
