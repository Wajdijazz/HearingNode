var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Reponses = require('./reponses');



router.post('/', function (req, res) {
    console.log("reponses POST", req.body);
    Reponses.createreponses(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/', function (req, res) {

    Reponses.getreponse(function(err,rows){

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
           
        }
    });
});

module.exports = router;