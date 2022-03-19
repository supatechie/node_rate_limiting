const express = require("express");
const { loginHandler } = require("../controllers");
const { loginAccountLimiter } = require("../middleware");

const route = express.Router();

route.post("/login", loginAccountLimiter, loginHandler);

module.exports = route;
