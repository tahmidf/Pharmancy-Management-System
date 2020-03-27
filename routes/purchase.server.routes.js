module.exports = function(app){

 var purchases = require('./../controllers/purchases.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
 
 app.route('/purchases/new').get(purchases.new);

 app.route('/api/purchases')
	.get(purchases.list)
	.post(purchases.create);

  app.route('/api/purchases/:purchaseId')
	.get(purchases.read)
  .delete(purchases.delete);

	app.route('/api/purchases/edit/:purchaseId')
	.get(purchases.read)
	.put(users.requiresLogin, purchases.update);


app.param('purchaseId', purchases.purchaseByID);


}
