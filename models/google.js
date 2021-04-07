const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
    title: {
      type: String
    },
    authors: [{
      type: String
    }],
    description: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    }
  })

  const Book1 = mongoose.model("Book1", googleBookSchema);

  model.exports = Book1;