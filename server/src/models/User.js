import Joi from '@hapi/joi';
import mongoose from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';

let UserSchema = new mongoose.Schema({
  fbId: {
    type: String,
    required: true,
    unique: true
  },
  favorites: {
    type: [String]
  }
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

const validateUser = user => {
  const schema = {
    fbId: Joi.string(),
    favorites: Joi.array()
  };
  return Joi.validate(user, schema);
};

exports.validate = validateUser;
export default User;
