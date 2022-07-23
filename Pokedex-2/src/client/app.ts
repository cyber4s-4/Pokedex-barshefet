
// global veriables for the search
const searchInput= document.getElementById('search-input') as HTMLInputElement;
const searchButton = document.getElementById('search-button');
const searchStatus = document.getElementById('search-status');

// global veriables for our pokemon spotlight
const spotImg = document.getElementById('spot-img') as HTMLImageElement;
const spotName = document.getElementById('name') as HTMLDivElement;
const spotType = document.getElementById('type') as HTMLDivElement;
const spotWeight = document.getElementById('weight') as HTMLDivElement;
const spotHeight = document.getElementById('height') as HTMLDivElement;
const spotDiv = document.getElementById('poke-spotlight') as HTMLDivElement;

const body = document.querySelector('body');
export const pokeContainer = document.createElement('div');
pokeContainer.className = 'container';
body?.appendChild(pokeContainer);

import { characteristics } from './characteristics';
import { pokeListComponent } from './pokeList';

// sends a request for searched pokemon. if return correctly puts the pokemon data in the spotlight
const findPokemon = (pokemon: string) => {
  fetch(`/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      
      if (data !== undefined) {
        spotName.innerHTML = `<h2>Name: ${data.name}`;
        spotImg.src = data.front_sprite;
        spotType.innerHTML = `Type: ${data.type}`;
        spotWeight.innerHTML = `Weight: ${data.weight}`;
        spotHeight.innerHTML = `Height: ${data.height}`;
        spotDiv.className = 'pokemon-spotlight';

      }
    }).catch(error => {
      console.log(error);
      searchStatus!.innerText = `Didn't find a pokemon named ${pokemon}`;
    });

};

// when the pokeball button is clicked it clears the search status if their is one and starts findPokemon()
searchButton?.addEventListener('click', () => {
  searchStatus!.innerHTML = '';
  findPokemon(searchInput.value);

});

// when the page loads the first 60 pokemons from the api are loaded by their data and th pokeList componnent
const loadPokemons = () => {
  
    fetch(`/pokemons`)
      .then(res => res.json())
      .then(data => {
        data.forEach((pokemon: { name: string; front_sprite: string; weight: number; height: number; type: string; }) => {
          const poke :characteristics = new characteristics(pokemon.name,
            pokemon.front_sprite,
            pokemon.weight,
            pokemon.height,
            pokemon.type);
  
          new pokeListComponent(poke).render();
        });
       
      }
      );
  
};

// runs at page load the loadPokemons program
window.addEventListener('load', loadPokemons);
