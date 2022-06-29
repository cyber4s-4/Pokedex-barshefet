let pokemon

fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(async res => {
  if(res.ok){
  pokemon = res.json()
  }else{
    console.log(`Didn't find`)
  }
  
})

console.log(pokemon)










