module.exports = function(app){

 var customerInvoices = require('./../controllers/customerinvoicecontroller.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
 
 
    app.route('/api/customerInvoices')
	.get(users.requiresLogin,customerInvoices.list)
	.post(users.requiresLogin,customerInvoices.create);

  app.route('/api/customerInvoices/:customerInvoiceId')
	.get(customerInvoices.read)
  .delete(users.requiresLogin, customerInvoices.delete);

	app.route('/api/customerInvoices/edit/:customerInvoiceId')
	.get(users.requiresLogin,customerInvoices.read)
	.put(users.requiresLogin,customerInvoices.update);
	
	


app.param('customerInvoiceId', customerInvoices.customerInvoiceByID);


}
