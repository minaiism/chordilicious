import express from 'express';
import * as GeniusService from '../services/GeniusService';

const router = express.Router();

router.get('/search', async (req, res) => {
  await GeniusService.search(req.query.phrase).then(response => res.send(response))
    .catch(err => console.error(err));
});

export default router;