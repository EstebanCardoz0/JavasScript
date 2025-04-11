const punto = {
    x: 10, y: 15, dibujar() {
        console.log('dibujando');
    }
}
console.log(punto);
//delete punto.dibujar;

if ('dibujar' in punto) {
    console.log('dibujar existe');
    punto.dibujar();
}
//console.log(Object.keys(punto)); // ['x', 'y', 'dibujar']

for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

// es preferible usar esta forma porque es más legible y fácil de entender
for (let llave in punto) {
    console.log(llave, punto[llave]);
}





