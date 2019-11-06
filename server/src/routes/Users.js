import bcrypt from 'bcrypt';
import {validate} from '../models/User';
import User from "../models/User";
import express from 'express';

const router = express.Router();

router.post('/', async ({body}, res) => {
    /* First Validate The Request */
    const {error} = validate(body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    /* Check if this user already exists */
    let user = await User.findOne({email: body.email});
    if (user) {
        return res.status(400).send('User already exists!');
    } else {
        /* Insert the new user if doesn't exist yet */
        user = new User({...body});
        /* Remember to hash the password before saving */
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.salt = salt;
        user.save().then(newUser => {
            res.send(newUser);
        }).catch(err => {
            console.error(err);
            res.status(400).send('Register failed!', err);
        });
    }
});

export default router;