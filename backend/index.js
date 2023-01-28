const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Entry = require("./Model/entry");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectMongo = () => {
  try {
    mongoose.connect("mongodb://0.0.0.0:27017/shashtra", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("We are connected");
  } catch (e) {
    console.log(e);
  }
};

app.get("/getEntries", async (req, res) => {
  try {
    const entries = await Entry.find();
    return res.send(entries);
  } catch (e) {
    console.log(e);
  }
});
app.post("/addEntries", async (req, res) => {
  try {
    const entry = await Entry.create({
      title: req.body.title,
      description: req.body.description,
    });
    return res.send({
      entryCreated: entry,
    });
  } catch (e) {
    console.log(e);
  }
});
app.post("/deleteEntry", async (req, res) => {
  try {
    const deleted = await Entry.findByIdAndDelete({ _id: req.body.id });
    res.send({ deleted: deleted });
  } catch (e) {
    console.log(e);
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
  connectMongo();
});
