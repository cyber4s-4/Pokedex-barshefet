
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

//
const body = document.querySelector('body');
export const pokeContainer = document.createElement('div');
pokeContainer.className = 'container';
body?.appendChild(pokeContainer);

import { characteristics } from './characteristics';
import { pokeListComponent } from './pokeList';

// sends a request for searched pokemon. if return correctly puts the pokemon data in the spotlight
const findPokemon = (pokemon: string) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      if (data !== undefined) {
        console.log(data.types[0].type.name);
        spotName.innerHTML = `<h2>Name: ${data.name}`;
        spotImg.src = data.sprites.front_default;
        spotType.innerHTML = `Type: ${data.types[0].type.name}`;
        spotWeight.innerHTML = `Weight: ${data.weight}`;
        spotHeight.innerHTML = `Height: ${data.height}`;
        spotDiv.className = 'pokemon-spotlight';

      }
    }).catch(error => {
      console.log(error);
      searchStatus!.innerText = `Didn't find a pokemon named ${pokemon}`;
    });

};

//when the pokeball button is clicked it clears the search status if their is one and starts findPokemon()
searchButton?.addEventListener('click', () => {
  searchStatus!.innerHTML = '';
  findPokemon(searchInput.value);

});

//when the page loads the first 60 pokemons from the api are loaded by their data and th pokeList componnent
const loadPokemons = () => {
  for (let i = 0; i < 61; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => {
        const poke :characteristics = new characteristics(data.name,
          data.sprites.front_default,
          data.weight,
          data.height,
          data.types[0].type.name);

        new pokeListComponent(poke, pokeContainer).render();
      }
      );
  }
};

//runs at page load the loadPokemons program
window.addEventListener('load', loadPokemons);
