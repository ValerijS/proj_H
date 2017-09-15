var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
const User = require('C:/nodeJs/proj_D/db').Administrator;
const Pasport = require('C:/nodeJs/proj_D/public/JavaScript/pasport');
const pug = require('pug');
module.exports = function(req, res, next) {
  passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  function(email, password,done){
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {      
          if (!user) {
            return done(null, false, {message: 'Incorrect email', field: 'email'});
          }      
          if (req.body.password !== user.password) {
            return done(null, false, {message: 'Incorrect password', field: 'password'});
          }      
          return done(null, user);
          },
          (err) => done(err, false, {message: 'Incorrect some.', field: 'username or password'}));
  })),
  passport.authenticate('local',
    function(err, user, info) {      
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('admin')
            })
          : res.redirect('/register');
    }
  )(req, res, next)
}