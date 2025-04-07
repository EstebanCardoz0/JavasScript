function suma(a) {
return a + 2;
}

console.log(suma(3)); // 5

function sumas(a, b) {
    console.log(arguments) //no se recomienda esta forma
return a + b;
}
console.log(sumas(3, 4)); // 7

console.log(typeof suma); // function
