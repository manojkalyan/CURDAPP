const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
    {
    name:
    {
       type :String,
       required: true,

    },

    description: 
    {
    type:String,
    required: true,

    },

    category: 
    {
        type:String,
        required: true

    },

    isActive: {
    type:Boolean,
    required: true

    }
},
 {
    timestamps: true // Automatically add createdAt and updatedAt fields
  }
);


const Record = mongoose.model('Record', recordSchema);
module.exports = Record;