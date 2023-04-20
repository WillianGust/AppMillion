var express = require('express');
var router = express.Router();
var HomeControler = require('../app/controllers/home_controller');
var AdmControler = require('../app/controllers/adm_controller');


/* GET home page. */
router.get('/', HomeControler.index );
router.get('/adm.json', AdmControler.index );

module.exports = router;