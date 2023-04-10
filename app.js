import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 8080



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })