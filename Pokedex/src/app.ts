fetch('https://pokeapi.co/api/v2/Pikachu').then(res => {
  if(res.ok){
  console.log(res.json())
  }else{
    console.log(`Didn't find`)
  }
})










