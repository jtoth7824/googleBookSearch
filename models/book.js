const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
//  title: { type: String, required: true },
//  author: [{ type: String, required: true }],
  title: { type: String},
  author: { type: String},
  synopsis: String,
  image: {type: String},
  link: {type: String},
//  date: { type: Date, default: Date.now }
});




const Book = mongoose.model("Book", bookSchema);
//const Book1 = mongoose.model("Book1", googleBookSchema);

module.exports = Book;
//module.exports = Book1;
