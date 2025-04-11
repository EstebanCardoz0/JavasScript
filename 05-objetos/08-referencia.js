// let a= 1;
// let b=a;

// b++;
// console.log(a,b);

// let a = {};
// let b = a; // b es una referencia a a

// b.prop=1;
// console.log(a,b); // { prop: 1 } { prop: 1 }

//let a = 1;
let a = { prop: 1 };
function suma(n) {
    // n++;
    n.prop++;   // Incrementa la propiedad prop de n
}

suma(a);
console.log(a); // 1

//los datos primitivos se copian, los objetos se pasan por referencia
// En el caso de los objetos, tanto a como b apuntan al mismo objeto en memoria