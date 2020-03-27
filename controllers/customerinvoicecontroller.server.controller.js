var mongoose = require('mongoose');
var CustomerInvoice = require('./../models/customerInvoice.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  CustomerInvoice.find(function(err, data) {
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
  var customerInvoice = new CustomerInvoice(req.body);
  customerInvoice.user = req.user;
  customerInvoice.save(function(err, data) {
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
  res.json(req.customerInvoice);
};


exports.delete = function(req, res) {
	var customerInvoice = req.customerInvoice;
	customerInvoice.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(customerInvoice);
		}
	});
};


module.exports.update = function(req, res) {
  var customerInvoice = req.customerInvoice;

  	customerInvoice = _.extend(customerInvoice, req.body);

  	customerInvoice.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(customerInvoice);
  		}
  	});
};

exports.customerInvoiceByID = function(req, res, next, id) {
	CustomerInvoice.findById(id).populate('user', 'email').exec(function(err, customerInvoice) {
		if (err) return next(err);
		if (!customerInvoice) return next(new Error('Failed to load customerInvoice ' + id));
		req.customerInvoice = customerInvoice;
		next();
	});
};
