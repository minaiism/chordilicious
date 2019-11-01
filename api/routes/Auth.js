import bcrypt from 'bcrypt';
import {validate} from '../models/User';
import User from "../models/User";
import express from 'express';
const router = express.Router();

router.post('/', async ({body}, res) => {
    /* First Validate The HTTP Request */
    const { error } = validate(body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    /*  Now find the user by his/her email address */
    let user = await User.findOne({ email: body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
    /* Then validate the Credentials in MongoDB match
        those provided in the request */
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    res.send(true);
});


export default router;