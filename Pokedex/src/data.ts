export function Dman(howMany: number) {
    for( let i = 0; i < howMany; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(data => console.log(data))
    }
  }
 