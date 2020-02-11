import express from 'express';
import axios from 'axios';

const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const geniusToken = process.env.GENIUS_TOKEN;

router.get('/search', async (req, res) => {
  await axios.get('https://api.genius.com/search?q=' + req.query.phrase + '&access_token=' + geniusToken)
    .then(response => res.send(response.data.response.hits.map(element => element.result)))
    .catch(err => console.error(err));
});

export default router;