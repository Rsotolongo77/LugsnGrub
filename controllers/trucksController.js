const db = require("../models/trucks");


module.exports = {
    findAll: function (req, res) {
        db.Trucks
            .find(req.query)
            .sort({ date: -1 })
            .then(dbTrucks => res.json(dbTrucks))
            .catch(err => res.status(422).json(err));
    }

};