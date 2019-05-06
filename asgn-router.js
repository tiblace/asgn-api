var express = require('express');
var router = express.Router();

var asgnController = require('./asgn-controller');

//POST
router.post('/asgn', asgnController.createAsgn);

//Get
router.get('/asgn', asgnController.retrieveAsgn);

router.get('/asgn', asgnController.listAsgn);

//PUT
router.put('/asgn', asgnController.updateAsgn);

//DELETE
router.delete('/asgn', asgnController.deleteAsgn);

module.exports = router;