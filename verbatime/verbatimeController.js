var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var verbatime = require('./verbatime');
const sentiment = require('multilang-sentiment');
var Sentiment = require('sentiment');
var sentimente = new Sentiment();
var   mot
var score
var tab= []
router.get('/:id', function (req, res) {
    var id=req.params.id
console.log(req.body)
    verbatime.getverbatime(id,function(err,rows){
    

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
console.log("verbatime",req.body)
    verbatime.createreponseverbatime(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});
router.delete('/:id', function (req, res) {
    var id=req.params.id

    verbatime.DeleteReponseByIdQuestionnaire(id,function(err,count){
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