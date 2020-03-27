var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VendorSchema = {


   vendorID: {
        type: Number,
        trim: true,
        default: '',
        required: 'ID required'
      },

    vendor_name: {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
      },

    vendor_phone: {
        type: String,
        trim: true,
        default: '',
        required: 'Phone Number required'
      },

    vendor_email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email required'
    },
    vendor_address: {
        type: String,
        trim: true,
        default: '',
        required: 'Address required',
    },
    vendor_balance: {
        type: String,
        trim: true,
        default: '',
    },
    vendor_due: {
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

var Vendor = mongoose.model('Vendor', VendorSchema, 'vendors');
module.exports = Vendor;
