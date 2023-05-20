var express = require('express');
var router = express.Router();
var HomeControler = require('../app/controllers/home_controller');
var AdmControler = require('../app/controllers/adm_controller');


/* GET home page. */
router.get('/', HomeControler.index );
router.get('/adm.json', AdmControler.index );
router.post('/adm.json', AdmControler.create );
router.put('/adm/:adm_id/json', AdmControler.change );
router.delete('/adm/:adm_id/json', AdmControler.delete );

module.exports = router;