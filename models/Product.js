var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = {

    product_id: {
        type: Number,
        trim: true,
        default: '',
        required: 'product ID required'
      },
    product_name: {
        type: String,
        trim: true,
        default: '',
        required: 'product Name required'
      },
        productprice: {
        type: Number,
        trim: true,
        default: '',
        required: 'product Price required'
      },

    product_stock: {
        type: Number,
        trim: true,
        default: '',
    },
    
    product_category: {
        type: String,
        trim: true,
        default: '',
        required: 'category required'
    },

    user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

    created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;
