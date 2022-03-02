const rateLimit = require("express-rate-limit");
const limit = rateLimit({
  windowMs: 2000, // time in ms
  max: 1, //requests per windowMs
});
module.exports = { limit };
