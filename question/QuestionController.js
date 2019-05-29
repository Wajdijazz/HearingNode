var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Question = require('./Question');

router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log("Question GET", req.body , req.params);
    Question.getQuestion(id,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/', function (req, res) {
    console.log("Question GET", req.body);
    Question.getQuestions(function(err,rows){
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
    console.log("Question POST", req.body);
    Question.createQuestion(req.body,function(err,count){
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