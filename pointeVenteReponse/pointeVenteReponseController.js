
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var pointeVenteReponse= require('./pointeVenteReponse');

router.post('/', function (req, res) {
    console.log("pointeVente Reponse POST", req.body);

    pointeVenteReponse.createreponsepointevente(req.body,function(err,count){
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

    pointeVenteReponse.getreponsepointevente(function(err,rows){

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
