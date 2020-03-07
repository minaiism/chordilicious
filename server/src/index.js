import Users from './routes/Users';
import config from 'config';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import { createToken } from './modules/Jwt';
import Auth from './middlewares/Auth';
import setupPassport from './modules/Passport';
import cookieParser from 'cookie-parser';
import Genius from './routes/Genius';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config();

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8443;

app.use(
  cors({
    origin: 'https://localhost:3000',
    credentials: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.get('/auth/facebook', passport.authenticate('facebook'),
  (req, res) => {
    if (!req.user) {
      return res.redirect('https://localhost:3000/sign-in');
    }
    console.log('req.user', req.user);
    const token = createToken({ id: req.user._id });
    res.cookie('jwt', token, { httpOnly: true });
    res.redirect('https://localhost:3000/sign-in-callback');
  });

app.get('/logout', (req, res) => {
  res.cookie('jwt', '', { expires: new Date(1), path: '/', httpOnly: true });
  res.redirect('https://localhost:3000/');
});

app.use(express.json());
app.use('/users', Auth, Users);

if (process.env.USER_ANARCHY_MODE) {
  app.use('/songs', Genius);
} else {
  app.use('/songs', Auth, Genius);
}

const key = fs.readFileSync(path.join(__dirname, '/../../selfsigned.key'));
const cert = fs.readFileSync(path.join(__dirname, '/../../selfsigned.crt'));
const options = {
  key: key,
  cert: cert
};

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log('server starting on port : ' + port);
});