const express = require("express");
const router = express.Router();
const { register } = require("../controllers/register");
const { login } = require("../controllers/login");
const { getGroups } = require("../controllers/getGroups");
const { getDashboard } = require("../controllers/getDashboard");

router.post("/register", register); // Hier registrieren wir einen User
router.post("/login", login, getGroups); // Hier User login
router.get("/dashboard", getDashboard); // Hier Daten fürs Dashboard holen

module.exports = router;
