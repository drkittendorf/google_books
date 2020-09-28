const db = require("../models");
//! Controllers manipulates the model they are used by the user
//! Controllers store APIs of the app
// Defining methods for the gbooksController
module.exports = {
  findAll: function(req, res) {
    console.log("something hit line 7 gbooksController.js: terminal log")
    db.Gbook
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("something hit line 15 gbooksController.js: terminal log")
    db.Gbook
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("something hit line 22 gbooksController.js: terminal log")
    db.Gbook
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("something hit line 29 gbooksController.js: terminal log")
    db.Gbook
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("something hit line 36 gbooksController.js: terminal log")
    db.Gbook
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
