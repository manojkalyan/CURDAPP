const express = require('express');
const router = express.Router();

// Import employee controller



// Include other routers for different routes
router.use('/user', require('./userRoute'));
router.use('/records', require('./recordRoute'));


// Export the router to be used in the main app file
module.exports = router;