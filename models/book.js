const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: [{ type: String, required: true }],
  synopsis: String,
  date: { type: Date, default: Date.now }
});




const Book = mongoose.model("Book", bookSchema);
//const Book1 = mongoose.model("Book1", googleBookSchema);

module.exports = Book;
//module.exports = Book1;
