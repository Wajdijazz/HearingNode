var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Questionnaire = require('./Questionnaire');

router.get('/', function (req, res) {
    console.log("Questionnaire GET", req.body);
    Questionnaire.getquestionnaires(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log("Questionnaire GET", req.body , req.params);
    Questionnaire.getquestionnaire(id,function(err,rows){
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
    console.log("Questionnaire POST", req.body);
    Questionnaire.createquestionnaire(req.body,function(err,count){
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