var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');


// Routes:
var asgnRoute = require('./asgn-router');


// DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/asgn');


app.use('/test', asgnRoute);

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});





