//personaje de tv
let nombre ="Goku";
let anime= "Dragon Ball";
let edad=30;

let personaje={
    nombre: "Goku",
    anime: "Dragon Ball",
    edad: 30,

}

console.log(personaje); // {}
console.log(personaje.nombre); // Goku 
console.log(personaje["anime"]); // Dragon Ball

personaje.nombre="Vegeta";
console.log(personaje.nombre); // Vegeta

delete personaje.edad; // Eliminar la propiedad edad
console.log(personaje); 