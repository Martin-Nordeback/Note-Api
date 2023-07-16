const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/note-api", {
  useNewUrlParser: true,
  /*useCreateIndex: true,
  useFindAndModify: false,*/
});

module.exports = mongoose