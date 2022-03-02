const express = require("express");
const router = express.Router();
const { code_execution } = require("../controllers/users");

router.post("/code_execution/:secret_key", code_execution);

module.exports = router;
