import path from 'path';
import express, { Express} from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { connectToDatabase } from './mongo';
import { findPokemon } from './mongo';
import { get50Pokemons } from './mongo';
import { addPokemons } from './mongo';
import { fetchData, pokeList } from './data';


const app: Express = express();
app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root));

connectToDatabase()

const runOnce = () =>{
  fetchData(1000)
  setTimeout(() => {
    addPokemons(pokeList)
  }, 30000); 
  
}
runOnce()
  




app.get('/pokemon/:name', async (req, res) => {
  res.send(await findPokemon(req.params))
})

app.get('/pokemons', async (req, res) => {
  res.send(await get50Pokemons(1))
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});