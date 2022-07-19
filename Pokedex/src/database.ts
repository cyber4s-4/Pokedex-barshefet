import { characteristics } from './characteristics';

const mongoose = require('mongoose')


export const getAllPokemons = (howMany: number) => {
    for (let i = 1; i < howMany; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(data => {
          const poke :characteristics = new characteristics(data.name,
            data.sprites.front_default,
            data.weight,
            data.height,
            data.types[0].type.name);
            
            console.log(poke)
         
        }
        );
    }
    
  };


 export const test = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(res => res.json())
    .then(data => {
      const poke :characteristics = new characteristics(data.name,
        data.sprites.front_default,
        data.weight,
        data.height,
        data.types[0].type.name);
        
console.log(poke)
     
    }
    )
  }