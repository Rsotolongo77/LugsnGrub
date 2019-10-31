const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Truck
            .find(req.query)
            .sort({ date: -1 })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }

};