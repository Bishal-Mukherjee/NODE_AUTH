const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const { limit } = require("./helpers/RateLimit");
require("dotenv").config();

app.use(express.json({ extended: false }));

// const DATABASE =
//   "mongodb+srv://bishal123:IYZ8XwpFyCHJYnk2@cluster0.nxjhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose
//   .connect(DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DATABASE CONNECTED");
//   });

app.use("/api/users", limit, require("./routes/users"));

app.listen(8080, () => {
  console.log("SERVER WORKING ON 8080");
});
