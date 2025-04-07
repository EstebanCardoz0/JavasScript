//falso:
false
0
''
null
undefined
NaN

let nombre = ''; //falso
let username= nombre || 'Usuario'; //si nombre es falso, asigna 'Usuario' a username
console.log(username); // 'Usuario'

nombre = 'Juan'; //verdadero
username= nombre || 'Usuario'; //si nombre es falso, asigna 'Usuario' a username
console.log(username); // 'Juan'


function fn1() {
    console.log('soy funcion 1');
    return true;
}
function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x=fn1() && fn2(); //ejecuta fn1 y fn2 porque ambas son verdaderas


