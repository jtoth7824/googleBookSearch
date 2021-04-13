const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  title: { type: String},
  author: { type: String},
  synopsis: { type: String},
  image: {type: String},
  link: {type: String},
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
