'use strict';

module.exports = function(app) {
	 var users = require('./../controllers/users.server.controller.js');

	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(users.requiresLogin,users.hasAuthorization(['admin']),core.index);
	app.route('/about').get(users.requiresLogin,core.about);
	app.route('/add_product').get(users.requiresLogin,users.hasAuthorization(['admin']),core.add_product);
	app.route('/add_purchase').get(users.requiresLogin,users.hasAuthorization(['admin']),core.add_purchase);
	app.route('/manage-product').get(users.requiresLogin,users.hasAuthorization(['admin']),core.manage_product);
	app.route('/manage-supplier').get(users.requiresLogin,users.hasAuthorization(['admin']),core.manage_supplier);
	app.route('/payment').get(users.requiresLogin,core.payment);
	app.route('/stock').get(users.requiresLogin,users.hasAuthorization(['admin']),core.stock);
	app.route('/supplier').get(users.requiresLogin,users.hasAuthorization(['admin']),core.supplier);
	app.route('/view-invoices').get(users.requiresLogin,users.hasAuthorization(['admin']),core.view_invoices);
	app.route('/view-all-purchases').get(users.requiresLogin,users.hasAuthorization(['admin']),core.view_purchases);
	app.route('/user_buy_med').get(users.requiresLogin,core.user_buy_med);
	app.route('/user_index').get(users.requiresLogin,users.hasAuthorization(['user']),core.user_index);
	app.route('/user_pre_order').get(users.requiresLogin,users.hasAuthorization(['user']),core.user_pre_order);
    app.route('/new-sale').get(users.requiresLogin,users.hasAuthorization(['admin']),core.new_sale);
    app.route('/pmController').get(users.requiresLogin,users.hasAuthorization(['admin']),core.pmController);
    app.route('/custInvoice').get(users.requiresLogin,core.customerInvoice);
     app.route('/printInvoice').get(users.requiresLogin,users.hasAuthorization(['admin']),core.printInvoice);




};
