const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  // _id: ObjectId,
  abv: Number,
  avg_score_year: Object,
  beer_img: String,  
  beer_style: String,
  brewery: String,
  desc: String,  
  family: String,
  name: String,
  ratings_year: Object,
  std_score_year: Object
 },
 { collection : 'beer' });

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;