var Asgn = require('./asgn-model');

exports.listAsgn = function(req, res){
    if(!req.query.assignmentName){
            return res.status(400).send('Missing URL Parameter.');
        }
        Asgn.find({
            assignmentName: req.query.assignmentName
        })
        .then((doc)=>{
            res.json(doc);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
}

exports.createAsgn = function(req, res){
    if(!req.body){
        return res.status(400).send('Request body missing');
    }
    var model = new Asgn(req.body); 
    model.save()
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
        if(!req.query.assignmentName){
            return res.status(400).send('Missing URL Parameter.');
        }
        Asgn.findOne({
            assignmentName: req.query.assignmentName
        })
        .then((doc)=>{
            res.json(doc);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
    }

    exports.updateAsgn = function(req, res){
       Asgn.findOneAndUpdate({
        assignmentName: req.query.assignmentName
       }, req.body, {new: true})
       .then((doc)=>{
           res.json(doc);
       })
       .catch((err)=>{
           res.status(500).json(err);
       });
    }

    exports.deleteAsgn = function(req, res){
        if(!req.query.assignmentName){
            return res.status(400).send('Missing URL paramater.')
        }
        Asgn.findOneAndRemove({
            assignmentName: req.query.assignmentName
        })
        .then((doc)=>{
            res.json(doc);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
    }
