// Import required modules
const express = require('express');
const router = express.Router();
const passport =require('passport')
const registerController=require("../controllers/authController")
// Import employee controller



// Include other routers for different routes
router.get('/getRegistrationForm',registerController.register_get);
router.get('/getLoginForm',registerController.login_get);
router.post('/createUser',registerController.Create)
router.post('/createSession', passport.authenticate('local', {
    failureRedirect: '/user/getRegistrationForm'
}), registerController.create_session);
router.get('/signout', passport.checkAuthentication, registerController.destroysession);

// Export the router to be used in the main app file
module.exports = router;