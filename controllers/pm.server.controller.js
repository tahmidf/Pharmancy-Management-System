var mongoose = require('mongoose');
var PM = require('./../models/PharmacyModel.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  PM.find(function(err, data) {
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
  var pm = new PM(req.body);
  pm.user = req.user;
  pm.save(function(err, data) {
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
  res.json(req.pm);
};


exports.delete = function(req, res) {
	var pm = req.pm;
	pm.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(pm);
		}
	});
};


module.exports.update = function(req, res) {
  var pm = req.pm;

  	pm = _.extend(pm, req.body);

  	pm.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(pm);
  		}
  	});
};

exports.pmByID = function(req, res, next, id) {
	PM.findById(id).populate('user', 'email').exec(function(err, pm) {
		if (err) return next(err);
		if (!pm) return next(new Error('Failed to load pm ' + id));
		req.pm = pm;
		next();
	});
};
