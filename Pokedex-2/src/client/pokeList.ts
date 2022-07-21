// component for the loaded pokemons
import { characteristics } from './characteristics';
import { pokeContainer } from './app';

export class pokeListComponent {
  data: characteristics;
  parent;

  constructor(data: characteristics) {
    this.data = data;
    this.parent = pokeContainer;
  }

  render() {
    const pokemonItem = document.createElement('div');
    pokemonItem.className = 'pokemon-item';
    this.parent.appendChild(pokemonItem);

    const pokeName = document.createElement('h2');
    pokeName.innerText = this.data.name;
    pokemonItem.appendChild(pokeName);

    const pokeImg = document.createElement('img');
    pokeImg.src = this.data.pokeImg;
    pokemonItem.appendChild(pokeImg);

    const pokeHeight = document.createElement('p');
    pokeHeight.innerText = `Height: ${this.data.height}`;
    pokemonItem.appendChild(pokeHeight);

    const pokeWeight = document.createElement('p');
    pokeWeight.innerText = `Weight: ${this.data.weight}`;
    pokemonItem.appendChild(pokeWeight);

  }
}
