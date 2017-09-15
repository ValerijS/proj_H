var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
const User = require('C:/nodeJs/proj_D/db').Administrator;
const Pasport = require('C:/nodeJs/proj_D/public/JavaScript/pasport');
const pug = require('pug');
module.exports = function(req, res, next) {
    User.findOrCreate(
        {
        where: {email: req.body.email,  
               password:req.body.password}
        }
    ).then((result)=>{res.redirect('/admin');}) 
}
