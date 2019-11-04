const db = require("../models");

// CRUD OPERATORS UNDER THIS LINE: CREATE, READ, UPDATE, DELETE
module.exports = {
    findAll: function (req, res) {
        db.Truck
            .find(req.query)
            .sort({ date: -1 })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Truck
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Truck
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Truck
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Truck
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }

};