//TODO: implement findPokemon()

const searchInput= document.getElementById('search-input') as HTMLInputElement
const searchButton = document.getElementById('search-button')
const searchStatus = document.getElementById('search-status')

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
        console.log('its working');
      } 
    }).catch(error => {
      console.log(error)
      searchStatus!.innerText = `Didn't find a pokemon named ${pokemon}`
    })
    
};

searchButton?.addEventListener('click', ()=>{
  findPokemon(searchInput.value)
})

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

// window.addEventListener('load',loadPokemons)