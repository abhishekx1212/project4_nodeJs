const mongoose = require("mongoose");

const schema = mongoose.Schema;

const mySchema = new schema({
  img : {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("booksInfo",mySchema);
module.exports = user;
