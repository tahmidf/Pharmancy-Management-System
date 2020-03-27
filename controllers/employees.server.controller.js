var mongoose = require('mongoose');
var Employee = require('./../models/Employee.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Employee.find(function(err, data) {
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
  var employee = new Employee(req.body);
  employee.user = req.user;
  employee.save(function(err, data) {
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
  res.json(req.employee);
};


exports.delete = function(req, res) {
	var employee = req.employee;
	employee.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(employee);
		}
	});
};


module.exports.update = function(req, res) {
  var employee = req.employee;

  	employee = _.extend(employee, req.body);

  	employee.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(employee);
  		}
  	});
};

exports.employeeByID = function(req, res, next, id) {
	Employee.findById(id).populate('user', 'email').exec(function(err, employee) {
		if (err) return next(err);
		if (!employee) return next(new Error('Failed to load employee ' + id));
		req.employee = employee;
		next();
	});
};
