import { body } from "./app";
import { characteristics } from "./characteristics";

export class pokeListComponent {
    data: characteristics;
    
    constructor(data: characteristics, parent: HTMLElement) {
      this.data = data;
      
    }
   
    render() {
      const pokemonItem = document.createElement('div')
      pokemonItem.className = 'pokemon-item'
      body!.appendChild(pokemonItem);

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