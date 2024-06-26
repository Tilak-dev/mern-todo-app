const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});
const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
