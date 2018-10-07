const Auth0Strategy = require('passport-auth0');

const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

const strat = new Auth0Strategy (
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: 'openid email profile',
    callbackURL: '/login'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

const logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('http://localhost:3000/#/');
    // res.redirect('/#/');
  });
};

module.exports = {
  strat,
  logout
};