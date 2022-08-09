
const persona = {
    nombre:'perla',
    apellido: 'serrano',
    edad: 27,
    direccion:{
        ciudad:'santo domingo',
        zip:12315,
        lat:132.123131,
        lng:232.31213
    }
};
// console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona);
console.log(persona2);