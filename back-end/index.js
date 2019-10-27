const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

// middleware
server.use(cors());
server.use(express.json());

const beerRouter = require('./routers/beer.js');
const breweryRouter = require('./routers/brewery.js');

server.use('/beer', beerRouter);
server.use('/brewery', breweryRouter);

// serve static html file to user
server.get('/', (req, res)=>{
  res.send({api: "connected"});
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("*** MongoDB database connection established successfully ***\n");
})


// // // Use connect method to connect to the server
// MongoClient.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//   }, (err, client) => {
//     if (err) {
//       console.log(err);
//     } else {
//     // assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db('ipa');

//     db.collection('beer').findOne({name: 'whiteferrari'}, function(err, result) {
//       if (err) throw err;
//     })

//     // db.collection('beer').find().toArray((err, items) => {
//     //   console.log(items);
//     // });
//     client.close();
//     }
// });


server.listen(port, () => {
  console.log(`*** Server is running on port: ${port} ***`);
});
