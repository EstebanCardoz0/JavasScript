function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave'
            )
        },
    };
}

let user1= crearUsuario('Walter','walter@io.com');
let user2= crearUsuario('Carlos','Carlos@io.com');
let user3= crearUsuario('Cristian','Cris@io.com');

console.log(user1,user2,user3);