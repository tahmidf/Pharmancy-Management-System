var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerInvoice = {

    customer_address: {
        type: String,
        trim: true,
        default: '',
      },
    customer_del: {
        type: String,
        trim: true,
        default: '1',
      },
      mobile: {
        type: String,
        trim: true,
        default: '',
      },
       sale_id: {
        type: String,
        trim: true,
        default: '',
      },
      pro_id: {
        type: String,
        trim: true,
        default: '',
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

var CustomerInvoice = mongoose.model('CustomerInvoice', CustomerInvoice, 'customerinvoice');
module.exports = CustomerInvoice;
