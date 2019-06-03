var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Societe = require('./Societe');

router.get('/', function (req, res) {
    console.log("Societe GET", req.body);
    Societe.getsocietes(function(err,rows){
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
    var id= req.params.id;
    console.log("Societe GET by Id", req.body);
    Societe.getsocieteById(id,function(err,rows){
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
    console.log("Societe POST", req.body);
    Societe.createsociete(req.body,function(err,count){
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
    var id= req.params.id;

    console.log("societe deleteed", req.body);
    Societe.DeletePointeVenteById(id,function(err){
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