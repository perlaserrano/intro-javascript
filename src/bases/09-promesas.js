import { getHeroeById } from "./bases/08-import-exp";
import heroes from "./data/heroes";
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // importen el
      
//         const p1 = getHeroeById(2);
//         reject(p1);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });


// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(error => console.warn(error));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        // Tarea
        // importen el
      
        const p1 = getHeroeById(id);
    if(p1){
        resolve(p1);
    }else{
        reject('No se pudo encontrar el heroe');


    }
        // reject(p1);
    }, 2000);
});

 
}


   
getHeroeByIdAsync(1)
    .then(console.log)
    .catch( console.warn);