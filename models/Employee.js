var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmployeeSchema = {

    employee_id: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
      
    employee_firstName: {
        type: String,
        trim: true,
        default: '',
        required: 'First Name required'
      },

    employee_lastName: {
        type: String,
        trim: true,
        default: '',
        required: 'Last Name required'
      },

    employee_address: {
        type: String,
        trim: true,
        default: '',
        required: 'Address required',
    },

    employee_age: {
        type: Number,
        trim: true,
        default: '',
        required: 'Number required'
    },
    
    emloyee_pass: {
        type: String,
        trim: true,
        default: '',
        required: 'Number required'
    },
    
    employee_type: {
        type: String,
        trim: true,
        default: '',
        required: 'Type required',
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

var Employee = mongoose.model('Employee', EmployeeSchema, 'employee');
module.exports = Employee;
