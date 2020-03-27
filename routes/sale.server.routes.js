module.exports = function(app){

 var sales = require('./../controllers/sales.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/sales')
	.get(users.requiresLogin,sales.list)
	.post(users.requiresLogin,sales.create);

  app.route('/api/sales/:saleId')
	.get(users.requiresLogin,sales.read)
  .delete(users.requiresLogin,sales.delete);

	app.route('/api/sales/edit/:saleId')
	.get(users.requiresLogin,sales.read)
	.put(users.requiresLogin,sales.update);


app.param('saleId', sales.saleByID);


}
