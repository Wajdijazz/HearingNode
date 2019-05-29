var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var ConcurrentSociete = require('./ConcurrentSociete');

router.get('/', function (req, res) {
    console.log("Concuurent", req.body);
    ConcurrentSociete.getconcurrent(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});



router.post('/', function (req, res) {
    console.log("ConcurrentSociete POST", req.body);
    ConcurrentSociete.createconcurrent(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;