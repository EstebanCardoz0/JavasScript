/** 
* Nombre: ancho x alto
* 8K 7680 x 4320
• 4K 3840 x 2160
* WOHD 2560 x 1440
* FHD 1920 x 1080
* HD 1280 x 720
*/

// let hd = { ancho: 1280, alto: 720 };
// let fhd = { ancho: 1280, alto: 720 };
// let wohd = { ancho: 1280, alto: 720 };
// let cuatrok = { ancho: 1280, alto: 720 };
// let ochok = { ancho: 1280, alto: 720 };

// let resoluciones = [hd, fhd, wohd, cuatrok, ochok];

let resoluciones = [
  { nombre: "hd", ancho: 1280, alto: 720 },
  { nombre: "fhd", ancho: 1920, alto: 1080 },
  { nombre: "wqhd", ancho: 2560, alto: 1440 },
  { nombre: "4k", ancho: 3840, alto: 2160 },
  { nombre: "8k", ancho: 7680, alto: 4320 },
];

function nombreResolucion(ancho, alto) {
  let aux = "inválida";
  if (ancho > 7680 || ancho < 1280) {
  } else {
    for (let i = resoluciones.length - 1; i >= 0; i--) {
      let reso = resoluciones[i];
      if (ancho >= reso.ancho && alto <= reso.alto) {
        aux = reso.nombre;
        break;
      }
    }
  }
  return aux;
}

let nombr = nombreResolucion(7680, 2160);
console.log("la resolución es", nombr);
