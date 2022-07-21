import path from 'path';
import express, { Express} from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { connectToDatabase } from './mongo';
// import { addPokemons } from './mongo';
// import { fetchData, pokeList } from './data';


const app: Express = express();
app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root));

connectToDatabase()

// const runOnce = () =>{
//   fetchData(1000)
//   setTimeout(() => {
//     addPokemons(pokeList)
//   }, 80000); 
  
// }
// runOnce()
  


app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

app.get('/pokemon', (req, res) => {
  console.log('dajhfajf')
  res.send('test')
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
