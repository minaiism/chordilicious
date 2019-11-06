import passport from 'server/src/passport';
import User from './models/User';
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    email: 'email',
    password: 'password'
  },
  (email, password, callback) => {
    return User.findOne({email, password})
      .then(user => {
        if (!user) {
          return callback(null, false, {message: 'Incorrect email or password.'});
        }
        return callback(null, user, {message: 'Logged In Successfully'});
      })
      .catch(err => callback(err));
  }
));