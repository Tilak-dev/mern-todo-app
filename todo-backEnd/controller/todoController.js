const todoModel = require("../models/todoModel");

module.exports.getTodos = async (req, res) => {
  const todos = await todoModel.find();
  res.send(todos);
};

module.exports.saveTodo = async (req, res) => {
  const { todo } = req.body;
  todoModel
    .create({ todo })
    .then((data) => {
      console.log("saved successfully..");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({
        error: err,
        msg: "something went wrong",
      });
    });
};

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  todoModel
    .findByIdAndUpdate(id, { todo })
    .then(() => {
      res.send("updated successfully");
    })
    .catch((err) => {
      console.log(err);
      res.send({
        error: err,
        msg: "something went wrong",
      });
    });
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete(id)
    .then(() => {
      res.send("Delete successfully");
    })
    .catch((err) => {
      console.log(err);
      res.send({
        error: err,
        msg: "something went wrong",
      });
    });
};
