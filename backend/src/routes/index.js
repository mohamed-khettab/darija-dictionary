const express = require("express");
const wordRoutes = require("./word.routes");

const router = express.Router();

router.use("/words", wordRoutes);

router.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = router;
