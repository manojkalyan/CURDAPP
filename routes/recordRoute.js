const express = require('express');
const router = express.Router();
const passport=require('passport')
const recordController = require('../controllers/recordController');


router.get('/recordList',passport.checkAuthentication, recordController.record_list);

router.get('/getcreate',passport.checkAuthentication,recordController.record_create_get);

router.post('/create',passport.checkAuthentication,recordController.record_create_post);

 router.get('/details/:id',passport.checkAuthentication, recordController.record_detail);

router.get('/getrecordbyId/:id',passport.checkAuthentication, recordController.record_update_get);

router.post('/update/:id',passport.checkAuthentication, recordController.record_update_post);

router.get('/delete/:id', passport.checkAuthentication, recordController.record_delete);
router.post('/delete',passport.checkAuthentication, recordController.record_delete_bulk);

module.exports = router;