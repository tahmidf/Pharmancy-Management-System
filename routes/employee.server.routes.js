module.exports = function(app){

 var employees = require('./../controllers/employees.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/employees')
	.get(employees.list)
	.post(users.requiresLogin, employees.create);

  app.route('/api/employees/:employeeId')
	.get(employees.read)
  .delete(users.requiresLogin, employees.delete);

	app.route('/api/employees/edit/:employeeId')
	.get(employees.read)
	.put(users.requiresLogin, employees.update);


app.param('employeeId', employees.employeeByID);


}
