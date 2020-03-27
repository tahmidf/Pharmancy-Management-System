module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

  app.route('/products/new').get(products.new);

 app.route('/api/products')
	.get(users.requiresLogin,products.list)
	.post(users.requiresLogin,products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(users.requiresLogin,products.read)
	.put(users.requiresLogin,products.update);
	
	


app.param('productId', products.productByID);


}
