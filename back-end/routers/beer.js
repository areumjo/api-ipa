const router = require('express').Router();
// const MongoClient = require("mongodb").MongoClient;
// const uri = process.env.ATLAS_URI;

const Beer = require('../models/beer-model.js');

router.get('/', (req, res) => {
  res.status(200).json({api: 'beer-router'})
  
});

router.get('/all', (req, res) => {
  Beer.find()
    .then(beer => {
      res.json(beer.map(a => a.name))})
    .catch(err => res.status(400).json({error: err }))
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);
  Beer.find({name: name})
    .then(beer => {
      if (beer.length > 0) {
        res.json(beer);
      } else {
        res.status(400).json({error: "can not find the beer" })
      }
    })
    .catch(err => res.status(400).json({error: "can not find the beer" }))
});

router.get('/:name/rating', (req, res) => {
  const { name } = req.params;
  // console.log(name);
  Beer.find({name: name}, {"ratings_year": 1})
    .then(beer => {
      if (beer.length == 1) {
        beer = beer[0];
        beer['ratings_year'] = Object.fromEntries(
          Object.entries(beer['ratings_year']).filter(([k,v]) => !(v === null)));
        res.json(beer["ratings_year"]);
      } else {
        res.status(400).json({error: "can not find yearly rating of the beer" })
      }
    })
    .catch(err => res.status(400).json({error: "can not find yearly rating of the beer" }))
});
 
router.get('/:name/score', (req, res) => {
  const { name } = req.params;
  // console.log(name);
  Beer.find({name: name}, {"avg_score_year": 1})
    .then(beer => {
      if (beer.length == 1) {
        beer = beer[0];
        beer["avg_score_year"] = Object.fromEntries(
          Object.entries(beer["avg_score_year"]).filter(([k,v]) => !(v === null)));
        res.json(beer["avg_score_year"]);
      } else {
        res.status(400).json({error: "can not find yearly rating of the beer" })
      }
    })
    .catch(err => res.status(400).json({error: "can not find yearly rating of the beer" }))
});


// router.get('/one', (req, res) => {
  
//   MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     }, (err, client) => {
//       if (err) {
//         console.log(err);
//       } else {
//       const db = client.db('ipa');
//       db.collection('beer').findOne({}, (err, items) => {
//         console.log(items);
//         res.status(200).json(items)
//       });
//       client.close();
//       }
//   })
// })

module.exports = router;