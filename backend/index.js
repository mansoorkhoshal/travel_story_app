const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));

// for testing api
app.post("/hello", async (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
