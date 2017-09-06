const passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login(req, res) {
    console.log("LOGIN");
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, (err) => {
        if (err) res.send(err);
        return res.send({
          message: info.message,
          user: user
        });
      });

    })(req, res);
  },

  logout(req, res) {
    req.logout();
    res.redirect('/');
  }
};
