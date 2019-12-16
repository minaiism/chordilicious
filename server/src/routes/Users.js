import User, { validate } from '../models/User';
import express from 'express';

const router = express.Router();

const getUser = (fbId) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ fbId });
    if (user) {
      return resolve(user);
    }
    reject(new Error('User not found'));
  });
};

router.get('/:fbId', async (req, res) => {
  getUser(req.params.fbId).then(user => res.send(user)).catch(err => res.status(404).send(err.message));
});

router.post('/', async ({ body }, res) => {
  /* First Validate The Request */
  const { error } = validate(body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  /* Check if this user already exists */
  let user = await User.findOne({ fbId: body.fbId });
  if (user) {
    return res.status(400).send('User already exists!');
  }
  /* Insert the new user if doesn't exist yet */
  user = new User({ ...body });
  user.save().then(newUser => {
    res.send(newUser);
  }).catch(err => {
    console.error(err);
    res.status(400).send('Register failed!', err);
  });

});

export default router;