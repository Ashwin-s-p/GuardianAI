const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  area: String,
  photo: String,
  lastSeenLocation: String,
  lastSeenTime: Date,
  cameraMatched: String,
  zoneStatus: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Case", caseSchema);