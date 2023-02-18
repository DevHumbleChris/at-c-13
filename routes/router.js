const express = require("express");
const router = express.Router();
const { handleAlert } = require("../controllers/handleAlert");

router.get("/", (req, res) => {
  res.send("Hello guys welcome");
});

router.post("/alert-fgm", handleAlert);

module.exports = router;
