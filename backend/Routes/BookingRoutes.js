const express = require("express");
const { test } = require("../Controllers/BookingController");

const router = express.Router();

router.get("/test", test);

module.exports = router;
