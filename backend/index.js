const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./Config/config.env" });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

require("./config/mongoConnection");
app.get("/", (req, res) => {
  res.send("Connecting to MongoDB");
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
