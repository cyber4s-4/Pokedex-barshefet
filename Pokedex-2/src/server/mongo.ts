import { MongoClient } from 'mongodb';
import { pokeList } from './data';


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

export async function addPokemons() {
    pokeList.forEach(async pokemon => {
      try{
        await client.db("Pokedex").collection("pokemons").insertOne(pokemon)
      }
      catch(err){
        console.log(err)
      }
    })
    console.log('uploaded to mongdb')
}