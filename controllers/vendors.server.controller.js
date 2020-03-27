var mongoose = require('mongoose');
var Vendor = require('./../models/Vendor.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Vendor.find(function(err, data) {
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
	res.render('./../public/views/admin/supplier .ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.create = function(req, res) {
  var vendor = new Vendor(req.body);
  vendor.user = req.user;
  vendor.save(function(err, data) {
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
  res.json(req.vendor);
};


exports.delete = function(req, res) {
	var vendor = req.vendor;
	vendor.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(vendor);
		}
	});
};


module.exports.update = function(req, res) {
  var vendor = req.vendor;

  	vendor = _.extend(vendor, req.body);

  	vendor.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(vendor);
  		}
  	});
};

exports.vendorByID = function(req, res, next, id) {
	Vendor.findById(id).populate('user', 'email').exec(function(err, vendor) {
		if (err) return next(err);
		if (!vendor) return next(new Error('Failed to load vendor ' + id));
		req.vendor = vendor;
		next();
	});
};
