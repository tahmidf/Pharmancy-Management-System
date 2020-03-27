module.exports = function(app){

 var vendors = require('./../controllers/vendors.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('vendors/new')
    .get(users.requiresLogin,vendors.new);
 app.route('/api/vendors')
	.get(users.requiresLogin,vendors.list)
	.post(users.requiresLogin,vendors.create);

  app.route('/api/vendors/:vendorId')
	.get(users.requiresLogin,vendors.read)
  .delete(users.requiresLogin, vendors.delete);

	app.route('/api/vendors/edit/:vendorId')
	.get(users.requiresLogin,vendors.read)
	.put(users.requiresLogin,vendors.update);


app.param('vendorId', vendors.vendorByID);


}
