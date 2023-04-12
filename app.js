import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 8080

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})

app.get('*', (req, res) => {
    res.send("404 | Page not found")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })