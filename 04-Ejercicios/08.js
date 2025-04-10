let array = [{ id: 1, name: 'Nicolás' }, { id: 2, name: 'Agustin' }, { id: 3, name: 'Cardozo' }];

function toPairs(arr) {
    let pares = [];

    for (let i = 0; i < arr.length; i++) {

        pares.push([i + 1, arr[i]]);
    }
    return pares;
}

let resultado = toPairs(array);
console.log(resultado);

