import User, { validate } from '../models/User';
import express from 'express';
const router = express.Router();

router.post('/', async ({ body }, res) => {
  const { error } = validate(body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let user = await User.findOne({ fbId: body.fbId });
  if (user) {
    return res.send(user);
  }
  user = new User({ ...body });
  user.save().then(newUser => {
    res.send(newUser);
  }).catch(err => {
    console.error(err);
    res.status(400).send('Something went wrong!', err);
  });
});
export default router;