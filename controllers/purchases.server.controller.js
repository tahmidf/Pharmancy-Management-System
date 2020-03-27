var mongoose = require('mongoose');
var Purchase = require('./../models/Purchase.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Purchase.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

exports.new = function(req, res) {
	res.render('./../public/views/admin/add_purchase.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.create = function(req, res) {
  var purchase = new Purchase(req.body);
  purchase.user = req.user;
  purchase.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.purchase);
};


exports.delete = function(req, res) {
	var purchase = req.purchase;
	purchase.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(purchase);
		}
	});
};


module.exports.update = function(req, res) {
  var purchase = req.purchase;

  	purchase = _.extend(purchase, req.body);

  	purchase.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(purchase);
  		}
  	});
};

exports.purchaseByID = function(req, res, next, id) {
	Purchase.findById(id).populate('user', 'email').exec(function(err, purchase) {
		if (err) return next(err);
		if (!purchase) return next(new Error('Failed to load purchase ' + id));
		req.purchase = purchase;
		next();
	});
};
