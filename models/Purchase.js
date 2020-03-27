var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PurchaseSchema = {

    purchase_productName: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
    },
    vendorName: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
    },      
      

    purchasetotalPrice: {
        type: Number,
        trim: true,
        default: '',
        //required: 'Number required'
      },
   

    purchase_price: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
    },
    
    purchase_quantity: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required',
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
var Purchase = mongoose.model('Purchase', PurchaseSchema, 'purchase');
module.exports = Purchase;
