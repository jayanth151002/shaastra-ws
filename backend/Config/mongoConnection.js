const db = process.env.DATABASE;

const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error connecting to MongoDB " + e);
  }
};

connectMongo();
