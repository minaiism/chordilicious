import Users from './routes/Users';
import config from 'config';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

const app = express();
const dotenv = require('dotenv');
dotenv.config();

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8080;

app.use(cors());
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
app.use('/signin', SignIn);
app.use('/signup', SignUp);

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});