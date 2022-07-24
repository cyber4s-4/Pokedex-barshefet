import path from 'path';
import express, { Express} from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { connectToDatabase } from './mongo';
import { findPokemon } from './mongo';
import { get60Pokemons } from './mongo';
// import { fusePokemon } from './mongo';
// import { addPokemons } from './mongo';
// import { fetchData, pokeList } from './data';


const app: Express = express();
app.use(cors());
app.use(json());

const root: string = path.join(process.cwd(), 'dist');
console.log(root)
app.use(express.static(root));

connectToDatabase()

// const runOnce = () =>{
//   fetchData(999)
//   setTimeout(() => {
//     addPokemons(pokeList)
//   }, 30000); 
  
// }
// runOnce()
  
// fusePokemon()



app.get('/pokemon/:name', async (req, res) => {
  res.send(await findPokemon(req.params))
})

app.get('/pokemons', async (req, res) => {
  res.send(await get60Pokemons(1))
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
}); 