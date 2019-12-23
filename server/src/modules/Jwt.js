import jwt from 'jsonwebtoken';

const secret = 'VmYq3t6w9z$C&E)H@McQfTjWnZr4u7x!';

export function createToken(data) {
  return jwt.sign(data, secret);
}

function cookieExtractor(req) {
  if (req && req.cookies) {
    return req.cookies.jwt;
  }
  return null;
}

export const passportJWTStrategyConfig = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: secret,
};
