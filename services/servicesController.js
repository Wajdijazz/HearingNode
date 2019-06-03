var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Services = require('./services');

router.get('/', function (req, res) {
    console.log("IdQuestionnaire GET", req.body , req.params);
    Services.getquestionnaireid(function(err,rows){
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

    console.log("PointventeBySociete GET", req.body , req.params);
    Services.getpointventeBySociete(id,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/:id1/:id2', function (req, res) {
    var id1= req.params.id1;
    var id2= req.params.id2;

    console.log("Get reponses GET", req.body , req.params);
    Services.getreponses(id1,id2,function(err,rows){
       

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
           rows.forEach(element => {
               
           });
        }
    });
});

router.delete('/:id', function (req, res) {
    var id= req.params.id;

    console.log("societe deleteed", req.body);
    Services.deleteUser(id,function(err){
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
console.log(router)
