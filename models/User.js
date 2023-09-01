const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
      gender: {
      type: String,
     enum: ['male', 'female', 'other'], // Add the enum values

      required: true
    }
     

  },
  {
    timestamps: true // Automatically add createdAt and updatedAt fields
  }
);
const User = mongoose.model('User', userSchema);

// Export the User model for use in other modules
module.exports = User;