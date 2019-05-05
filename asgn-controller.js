var Asgn = require('asgn-model');

exports.listAsgn = function(req, res){
    res.send('Calling ListAsgn function');
}

exports.createAsgn = function(req, res){
    if(!req.body){
        module.save()
            .then((doc)=>{
                if(!doc || doc.length ===0){
                    return res.status(500).send('Server Error');
                }
                res.status(201).send(doc);

            })
            .catch((err)=>{
                res.status(500).json(err);
            });
    }
    exports.retrieveAsgn = function(req, res){
        res.send('Calling retrieveAsgn function');
    }

    exports.updateAsgn = function(req, res){
        res.send('Calling updateAsgn function');
    }

    exports.deleteAsgn = function(req, res){
        res.send('Calling deleteAsgn function');
    }
}