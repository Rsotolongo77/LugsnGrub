const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Owner
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Owner
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Owner
            .findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};