const db = require("../models/truckOwners");

module.exports = {
    create: function (req, res) {
        db.Owners
            .create(req.body)
            .then(dbOwners => res.json(dbOwners))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Owners
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbOwners => res.json(dbOwners))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Owners
            .findById({ _id: req.params.id })
            .then(dbOwners => dbOwners.remove())
            .then(dbOwners => res.json(dbOwners))
            .catch(err => res.status(422).json(err));
    }
};