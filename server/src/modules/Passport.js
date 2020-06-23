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
    User.findById(id).then(user => {
      done(null, user);
    }).catch(err => {
      done(err);
    });
  });

  passport.use(new JwtStrategy(passportJWTStrategyConfig, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload.id }, (err, user) => {
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
      callbackURL: 'https://localhost:8443/auth/facebook'
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({
        fbId: profile.id,
        avatar: `https://graph.facebook.com/${profile.id}/picture`,
        name: profile.displayName,
        email: `${profile.id}@facebook.com`
      }, (err, user) => {
        cb(err, user);
      });
    }
  ));
};
