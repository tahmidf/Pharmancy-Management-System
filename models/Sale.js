var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SaleSchema = {

  
    sale_quantity: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },
      sale_product: {
        type: String,
        trim: true,
        default: '',
        required: 'Product name required',
    },

    sale_price: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },
    
    sale_total: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required'
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

var Sale = mongoose.model('Sale', SaleSchema, 'sale');
module.exports = Sale;
