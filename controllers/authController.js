const passport = require('passport');
const User = require('../models/User');

exports.register_get = (req, res) => {
 if (req.isAuthenticated()) {
    return res.redirect('/records/getcreate');
  }
    res.render('register');
};

module.exports.Create = async function (req, res) {
//   if (req.body.password != req.body.confirmpassword) {
//     // req.flash('error', 'Check email or password');
//     console.log('error');
//     return res.redirect('back');
//   }

  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (!existingUser) {
      const newUser = await User.create(req.body);
    //   req.flash('success', 'createdsuccess');

      return res.redirect('/user/getLoginForm');
    } else {
    //   req.flash('error', 'Check email or password');
      return res.redirect('back');
    }
  } catch (err) {
    console.log('Error in finding or creating user:', err);
    return res.status(500).send('Internal Server Error');
  }
};

exports.login_get = (req, res) => {
   if (req.isAuthenticated()) {
    return res.redirect('/records/getcreate');
  }
    res.render('login');
};

module.exports.create_session = async function (req, res) {
//   req.flash('success', 'Login success');
return res.redirect('/records/getcreate')
};
module.exports.destroysession = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    // req.flash('success', 'Successfully signout');
    console.log("signout")
    res.redirect('/user/getRegistrationForm');
  });
};