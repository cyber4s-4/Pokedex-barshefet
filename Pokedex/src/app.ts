//TODO: get html elements of displayed pokemon
//and implement findPokemon()
export const body = document.querySelector('body')
export const pokeContainer = document.createElement('div')
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

findPokemon('pikachu');

const loadPokemons = () =>{
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=60')
.then(res => res.json())
.then(data => {
  console.log(data)
  let poke :characteristics[] = new characteristics(data.results[0].name,
     data.results[0].sprites.front_default,
     data.results[0].weight,
     data.results[0].height)
  new pokeListComponent(poke, pokeContainer).render()
})
}

window.addEventListener('load',loadPokemons)