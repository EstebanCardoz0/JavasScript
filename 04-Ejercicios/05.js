let array = [2, 5, 77, 15, -300, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num
        }
    }

    if (menor === mayor) {
        return `El número ${menor} es al mismo tiempo el mayor y menor`;
    } else {
        return `El número ${menor} es el menor y el ${mayor} es el mayor`;
    }
}

let numeros = getMenorMayor(array);
console.log(numeros);