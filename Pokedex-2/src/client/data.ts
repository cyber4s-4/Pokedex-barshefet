export let pokeList : any[] = []

const options = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(pokeList)
}

const sendToSerever = () => {
  fetch('http://localhost:4200/addPokemons', options)
}


export function Dman(howMany: number) {
  for( let i = 1; i < howMany; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data=> {pokeList.push(data)})
  }
sendToSerever()

}
Dman(1)



 