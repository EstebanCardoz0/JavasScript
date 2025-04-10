let longitud = 5

function crearArray(n) {
    if(n<1){
        return "No puede haber un array de longitud negativa";
    }
let array=[];

for (let i = 0; i < n; i++) {
    array[i]=i+1;
    
}
return array;
}
let resultado = crearArray(longitud)
console.log(resultado);