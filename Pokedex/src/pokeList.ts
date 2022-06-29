import { body } from "./app";
import { characteristics } from "./characteristics";

export class pokeListComponent {
    data: characteristics[];
    
    constructor(data: characteristics[], parent: HTMLElement) {
      this.data = data;
      
    }
   
    render() {
        console.log(this.data)
      const pokemonItem = document.createElement('div')
      pokemonItem.className = 'pokemon-item'
      body!.appendChild(pokemonItem);

      const pokeImg = document.createElement('img')
      pokeImg.src = `${this.data[1]}`
    }
  }