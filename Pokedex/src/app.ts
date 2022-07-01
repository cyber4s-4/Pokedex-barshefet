//TODO: implement findPokemon()

const searchInput: HTMLElement | null = document.getElementById('search-input')
console.log(searchInput.value)
export const body = document.querySelector('body')
export const pokeContainer = document.createElement('div')
pokeContainer.className = 'container'
body?.appendChild(pokeContainer);

import { characteristics } from "./characteristics";
import { pokeListComponent } from "./pokeList";

const findPokemon = (pokemon: string) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      if (data !== undefined) {
        console.log(data.sprites);
      } 
    }).catch(error => {
      console.log(error)
      console.log(`couldnt find ${pokemon}`)
    })
    
};

// findPokemon('pikachu');

const loadPokemons = () =>{
  for(let i = 0; i < 61; i++){
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
.then(res => res.json())
.then(data => {
  let poke :characteristics = new characteristics(data.name,
     data.sprites.front_default,
     data.weight,
     data.height)
    
  new pokeListComponent(poke, pokeContainer).render()
  }
)
  }
}

window.addEventListener('load',loadPokemons)