
export let pokeList : any[] = []

export function Dman(howMany: number) {
  for( let i = 1; i < howMany; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data=> {pokeList.push(data)})
  }

  console.log(pokeList)

}
Dman(200)

 