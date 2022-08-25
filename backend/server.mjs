import express from 'express';
import links from './routes/links.mjs';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 8000;


app.use(express.static('public'));
app.use(cors());
app.use(express.json())
app.use('/',links);

const run = () => {
    mongoose.connect('mongodb://localhost/short', {useNewUrlParser:true});
    
    app.listen(PORT,() => {
        console.log(`Server started at http://localhost:${PORT} port`);
    })

    process.on("exit",() => {
        mongoose.disconnect();
    })
}

run();
