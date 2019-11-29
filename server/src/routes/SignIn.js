import express from 'express';
import User from '../models/User';

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

export default router;