'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/admin/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.add_product = function(req, res) {
	res.render('./../public/admin/add_product.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.add_purchase = function(req, res) {
	res.render('./../public/admin/add_purchase.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.manage_product = function(req, res) {
	res.render('./../public/admin/manage_product.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.manage_supplier = function(req, res) {
	res.render('./../public/admin/manage_supplier.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.payment = function(req, res) {
	res.render('./../public/admin/payment.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.stock = function(req, res) {
	res.render('./../public/admin/stock.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.supplier = function(req, res) {
	res.render('./../public/admin/supplier.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.user_buy_med = function(req, res) {
	res.render('./../public/admin/user_buy_med.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.user_index = function(req, res) {
	res.render('./../public/views/client/user_index.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.new_sale = function(req, res) {
	res.render('./../public/admin/newsale.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.user_pre_order = function(req, res) {
	res.render('./../public/admin/user_pre_order.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.view_invoices = function(req, res) {
	res.render('./../public/admin/view_invoices.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.view_purchases = function(req, res) {
	res.render('./../public/admin/view_purchases.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.pmController = function(req, res) {
	res.render('./../public/admin/pmController.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.customerInvoice = function(req, res) {
	res.render('./../public/views/client/custInvoice.ejs', {
		user: req.user || null,
		request: req
	});

};
exports.printInvoice = function(req, res) {
	res.render('./../public/admin/printInvoice.ejs', {
		user: req.user || null,
		request: req
	});

};
