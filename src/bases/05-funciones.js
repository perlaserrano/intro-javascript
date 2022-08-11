
// Funciones en JS 

//  const saludar = function (nombre) {
//     return ` Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
    
}

const saludar3 = (nombre) => {return `hola, ${nombre}`;}

const saludar4 = () => `hola, mundo`;


console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar2('perla'));

const getUser = () => ({
        uid:'ABC123',
        username:'El_Papi1502'


})

const user = getUser();
console.log(user);

// Tarea
// 1. Tranformen a una funcion flecha
// 2. Tiene que retornar un objeto implicito
// 3. lo pruebas

 const getUsuarioActivo = (nombre) => ({
    uid:'ABC564',
    username:nombre
});

const usuarioActivo = getUsuarioActivo('Perla');
console.log(usuarioActivo);