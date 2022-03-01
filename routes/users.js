const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/users");

router.post("/code_execution/:email", getUser);

module.exports = router;
