var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Societe = require('./PointVente');

router.get('/', function (req, res) {
    console.log("PointVente GET", req.body);
    Societe.getpointsvente(function(err,rows){
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

    console.log("PointVente GET by selected Id", req.body);
    Societe.getpointsventeById(id,function(err,rows){
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
    console.log("PointVente POST", req.body);
    Societe.createpointvente(req.body,function(err,count){
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