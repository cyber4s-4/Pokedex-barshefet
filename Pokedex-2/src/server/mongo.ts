import { MongoClient } from 'mongodb';


export const uri =
  'mongodb+srv://barshefet:ilovecode@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority';
export const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('connected to DB');
  }
}

export async function addPokemons(pokemon: any) {
      try{
        await client.db("Pokedex").collection("Pokemons").insertMany(pokemon)
      }
      catch(err){
        console.log(err)
      }
   
    console.log('uploaded to mongdb')
}

export async function findPokemon(pokemon: any) {
        let poke: any = await client.db("Pokedex").collection("Pokemons").findOne(pokemon)
        console.log('pokemon pulled from database')
        return poke
}

export async function get60Pokemons(index: number) {
  let poke: any[] = [];
  let limit = 60 * index;
  try {
    poke = await client.db("Pokedex").collection("Pokemons").find({}).limit(limit).skip(limit - 60).toArray();
  } catch (error) {
    console.log(error);
  }
  
  return poke
}


export async function fusePokemon() {
  console.log('started fusion')
  let allPoke: any[] = await client.db("Pokedex").collection("Pokemons").find({}).toArray()
  let fusedPokeList: any[]= []
  for(let index = 0; index < allPoke.length; index++){
    allPoke.forEach(secondaryPoke => {
      let fusedPokemon = {
        name : allPoke[index].name.substring(0, 3) + secondaryPoke.name.substring(3),
        front_sprite : allPoke[index].front_sprite ,
        type : [allPoke[index].type, secondaryPoke.type] ,
        weight : secondaryPoke.weight ,
        height : allPoke[index].height
      } 
      fusedPokeList.push(fusedPokemon)
    })
  }
  console.log("number of pokemon infused: " + fusedPokeList.length)
  
  try{
    await client.db("Pokedex").collection("Pokemons").insertMany(fusedPokeList)
  }
  catch(err){
    console.log(err)
  }

console.log('uploaded to mongdb')

}


export async function get10K(index: number) {
  let poke: any[] = [];

  try {
    poke = await client.db("Pokedex").collection("Pokemons").find({}).limit(10000).skip(0).toArray();
  } catch (error) {
    console.log(error);
  }
  
  return poke
}