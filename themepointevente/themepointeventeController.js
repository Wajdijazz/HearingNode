var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var themepointevente = require('./themepointevente');


router.get('/:id2/:pointevente', function (req, res) {
    var pointevente= req.params.pointevente;
    var id2= req.params.id2;

    console.log("Get reponses GET", req.body , req.params);
    themepointevente.getreponse(id2,pointevente,function(err,rows){
       

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
           
        }
    });
});
router.get(':/id', function (req, res) {
  

    console.log("Get reponses GET", req.body , req.params);
    themepointevente.getAllreponse(id,function(err,rows){
       

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
           
        }
    });
});
router.delete('/:id/:id_societe', function (req, res) {
    var id= req.params.id;
    var id_societe=req.params.id_societe

    Questionnaire.DeleteQuestionnaireById(id,id_societe,function(err,count){
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
