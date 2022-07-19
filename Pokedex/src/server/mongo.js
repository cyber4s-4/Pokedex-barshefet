import { MongoClient } from "mongodb";

const uri = `mongodb+srv://barshefet:ilovecode@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

let pokeList = []

async function create(client) {

  await client.connect();
  await client.db("pokedex").collection("pokemons").insertOne(pokeList[0]);
  
}


