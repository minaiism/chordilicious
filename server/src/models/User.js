const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  fbId: {
    type: String,
    required: true,
    unique: true
  },
  favorites: {
    type: [String],
  }
}));

const validateUser = user => {
  const schema = {
    fbId: Joi.string(),
    favorites: Joi.array()
  };
  return Joi.validate(user, schema);
};

exports.validate = validateUser;
export default User;
