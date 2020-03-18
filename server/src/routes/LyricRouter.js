import express from 'express';
import * as GeniusService from '../services/GeniusService';

const router = express.Router();

router.get('/search', async (req, res) => {
  await GeniusService.search(req.query.phrase).then(response => res.send(response))
    .catch(err => {
      console.error(err);
      res.status(500).send({ message: 'Cannot get the lyrics', details: err });
    });
});

export default router;