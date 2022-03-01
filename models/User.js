const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = User = mongoose.model("users", userSchema);
