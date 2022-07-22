import { MongoClient } from 'mongodb';
// import { pokeList } from './data';


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
        let poke: any = await client.db("Pokedex").collection("pokemons").findOne(pokemon)
        console.log('pokemon pulled from database')
        return poke
}

export async function get50Pokemons(index: number) {
  let limit = 60 * index
  let poke = await client.db("Pokedex").collection("pokemons").find({}).limit(limit).skip(limit - 60).toArray()
  return poke
}