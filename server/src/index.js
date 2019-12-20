import Users from './routes/Users';
import config from 'config';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import expressSession from 'express-session';
import { createToken } from './modules/Jwt';
import Auth from './middlewares/Auth';
import setupPassport from './modules/Passport';

import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config();

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressSession({ secret: 'black salami', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

setupPassport();

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
  .then(() => console.log('Now connected to MongoDB!'));


app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => {
    if (!req.user) {
      return res.redirect('http://localhost:3000/');
    }// eslint-disable-next-line no-underscore-dangle
    // console.log('req.user', req.user);
    const token = createToken({ id: req.user._id });
    res.cookie('jwt', token, { httpOnly: true });
    res.redirect('http://localhost:3000/');
  });

app.use(express.json());
app.use('/users', (req, res, next) => {

  // console.log(req);
  next();
}, Auth, Users);

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});