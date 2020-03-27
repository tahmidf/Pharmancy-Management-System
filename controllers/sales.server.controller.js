var mongoose = require('mongoose');
var Sale = require('./../models/Sale.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Sale.find(function(err, data) {
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

module.exports.create = function(req, res) {
  var sale = new Sale(req.body);
  sale.user = req.user;
  sale.save(function(err, data) {
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
  res.json(req.sale);
};


exports.delete = function(req, res) {
	var sale = req.sale;
	sale.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(sale);
		}
	});
};


module.exports.update = function(req, res) {
  var sale = req.sale;

  	sale = _.extend(sale, req.body);

  	sale.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(sale);
  		}
  	});
};

exports.saleByID = function(req, res, next, id) {
	Sale.findById(id).populate('user', 'email').exec(function(err, sale) {
		if (err) return next(err);
		if (!sale) return next(new Error('Failed to load sale ' + id));
		req.sale = sale;
		next();
	});
};
