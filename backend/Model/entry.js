const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  title: { type: "string", required: true, unique: true },
  description: { type: "string", required: true },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
