let pairs = [[1, { name: "Lisandro" }], [2, { name: "Eros" }], [3, { name: "Elena" }],];

function toCollection(arr) {

    let array = [];
    for (let [idx, obj] of arr) {

        array.push([idx, { idx: idx, name: obj.name }]);

    }
    return array;
}

let resultado = toCollection(pairs);
console.log(resultado);