const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    id:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000000000,
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
    }
}));

const validateUser = user => {
    const schema = {
        id: Joi.string().min(1).max(1000000000).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    };
    return Joi.validate(user, schema);
};

exports.validate = validateUser;
export default User;
