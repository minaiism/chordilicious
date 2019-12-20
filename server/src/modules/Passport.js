import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
import { passportJWTStrategyConfig } from './Jwt';
import User from '../models/User';
import FacebookStrategy from 'passport-facebook';

export default () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
     console.log(id);
    User.findById(id).then(user => {
      done(null, user);
    }).catch(err => {
      done(err);
    });
  });


  passport.use(new JwtStrategy(passportJWTStrategyConfig, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload.id }, (err, user) => {
      console.log('jwt jwt_payload', jwt_payload);
      console.log('jwt err', err);
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
  passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      // console.log('profile', profile);
      User.findOrCreate({ fbId: profile.id }, (err, user) => {
        console.log('findOrCreate', err, user);
        cb(err, user)
      });
    }
  ));
};
