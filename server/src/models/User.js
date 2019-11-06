const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  fbId: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  salt: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    unique: true
  }
}));

const validateUser = user => {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()
  };
  return Joi.validate(user, schema);
};

exports.validate = validateUser;
export default User;
