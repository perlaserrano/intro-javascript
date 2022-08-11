import  heroes, {owner} from '../data/heroes';

console.log( owner);
 
export const getHeroeById = (id) =>{
    return heroes.find( (heroe) => heroe.id === id);

}

// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter ((heroes) => heroes.owner === owner  );

// console.log(getHeroeByOwner('DC'));