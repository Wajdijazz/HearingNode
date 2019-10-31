
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var concurrent= require('./concurrent');

router.post('/', function (req, res) {
    console.log("concurrent POST", req.body);
    concurrent.createreponseconcurrent(req.body,function(err,count){
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

    console.log("Get  concurrent", req.body , req.params);
    concurrent.getConcurrent(function(err,rows){

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



    console.log("Get  concurrent", req.body , req.params);
    concurrent.getAllConcurrentReponse(id,function(err,rows){

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
           
        }
    });
});

router.delete('/:pointevente', function (req, res) {
    var pointevente=req.params.pointevente

    concurrent.DeleteReponseConcurrentByPointVente(pointevente,function(err,count){
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
