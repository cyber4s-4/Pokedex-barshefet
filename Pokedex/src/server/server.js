const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')


const port = 4200

app.use(cors());

const root = path.join(process.cwd(), 'dist');

app.use(express.static(root));

app.get('*', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});


app.get('/pokemon', (req, res)=>{
    res.send('pikachu')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})




