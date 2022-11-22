require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 3000;
const pokemon = require("./models/pokemon");
const reactViews = require('express-react-views');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('Connected to MONGO')
  })

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use(express.urlencoded({extended: false}));

// app.get('/pokemon', (req, res) => {
//     res.render('Index', {pokemon});
// })

// app.get('/pokemon/:id', (req, res) => {
//     res.render('Show', pokemon[req.params.id]);
// })

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, allPokemon) => {
        if(!err) {
            res.status(200).render('Index', {
                pokemon: allPokemon
            })
        } else {
            res.status(400).send(err);
        }
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        if(!err) {
            res.status(200).redirect('/pokemon')
        } else {
            res.status(400).send(err);
        }
    })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if(!err) {
            res.status(200).render('Show', {
                pokemon: foundPokemon
            })
        } else {
            res.status(400).send(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})