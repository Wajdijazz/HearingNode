var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var promotions = require('./promotions');


router.get('/:id2/:pointevente', function (req, res) {

    var id2= req.params.id2;
    var pointevente= req.params.pointevente;

    console.log("Get reponses GET promotion", req.body , req.params);
    promotions.getreponse(id2,pointevente,function(err,rows){
       

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

    console.log("Get reponses GET", req.body , req.params);
    promotions.getreponseSociete(id,function(err,rows){

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
console.log(router)
