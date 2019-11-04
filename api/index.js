import Users from './routes/Users';
import Auth from './routes/Auth';
import config from 'config';
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
/*dotenv config*/
const dotenv = require('dotenv');
dotenv.config();
/*mongo env config */
const mongoUri = process.env.MONGO_URI;

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}

/*Set up mongoose connection*/
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(error => {
    console.log('caught', error.message);
  });

app.use(express.json());
app.use('/users', Users);
app.use('/auth', Auth);

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});