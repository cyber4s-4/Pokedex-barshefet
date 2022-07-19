const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://barshefet:ilovecode@cluster0.rxb57.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri)

async function connect(client){

await client.connect(err => {
  if(err){
    console.log(err + 'didnt connect')
  }else{
    console.log('connected')
  }
})
}
connect(client)

const port = 4200

app.use(cors());

const root = path.join(process.cwd(), 'dist');

app.use(express.static(root));

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});


app.post('/addPokemons', (req, res) =>{
  console.log(req.body)
  let pokemons = req.body
  pokemons.forEach(pokemon => {
    
  });
  
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})


async function sendToDb(insert){
  await client.db('pokedex').collection('pokemons').insertOne(insert)
} 