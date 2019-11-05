const Account = require("../models/account");
const passport = require('passport');

module.exports = {
	findOne: function (req, res) {
		console.log("req params: ", req.params.username)
		Account
			.findOne({ username: req.params.username })
			.then(data => {
				console.log(data)
				res.json(data)
			})
			.catch(err => res.status(422).json(err));
	},
	getUser: function (req, res, next) {
		console.log(req._passport.session.user)
		console.log("Get User")

		if (req._passport.session.user) {
			console.log(req._passport.session.user)
			var user = req._passport.session.user
			// res.json(user);
			Account
				.find({ username: req._passport.session.user })
				.then(data => {
					console.log("from DB ", data)
					res.status(200).json(data)
				})
				.catch(err => res.status(422).json(err));
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},
	register: function (req, res, next) {
		console.log('/register handler', req.body);
		Account.register(new Account({
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
		}), req.body.password, (err, account) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}

			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						return next(err);
					}

					res.status(200).send('OK');
				});
			});
		});
	},
	login: function (req, res, next) {
		console.log("User back", req.body);
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.json(req.body);
		})

	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},

	test: function (req, res, next) {
		console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
	}

};











