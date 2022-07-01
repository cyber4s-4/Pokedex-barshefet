import { characteristics } from "./characteristics";
import { pokeContainer } from "./app";

export class pokeListComponent {
    data: characteristics;
    parent
    
    constructor(data: characteristics, parent: HTMLDivElement) {
      this.data = data;
      this.parent = pokeContainer
    }
   
    render() {
      const pokemonItem = document.createElement('div')
      pokemonItem.className = 'pokemon-item'
      this.parent.appendChild(pokemonItem);

      const pokeName = document.createElement('h2')
      pokeName.innerText = this.data.name
      pokemonItem.appendChild(pokeName)

      const pokeImg = document.createElement('img')
      pokeImg.src = this.data.pokeImg
      pokemonItem.appendChild(pokeImg)

      const pokeWeight = document.createElement('p')
      pokeWeight.innerText = this.data.weight.toString()
      pokemonItem.appendChild(pokeWeight)


    }
  }