var express = require('express');
var router = express.Router();

var asgnController = require('/asgn-contoller');

//POST
router.post('/asgn', asgnController.createAsgn);

//Get
router.get('/asgn', asgnController.retrieveAsgn);

//PUT
router.put('/asgn', asgnController.updateAsgn);

//DELETE
router.delete('/asgn', asgnController.deleteAsgn);

module.exports = router;