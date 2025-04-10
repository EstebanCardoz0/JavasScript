function precioCompleto(precio, impuesto) {
    return `el precio del producto con sus impuestos es de $${(precio + precio * impuesto).toFixed(2)}`;
}
let resultado= precioCompleto(19.90,0.15);
console.log(resultado);