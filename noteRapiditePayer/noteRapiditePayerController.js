var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var noteRapiditePayer = require('./noteRapiditePayer');


router.get('/:id1/:id2', function (req, res) {
    var id1= req.params.id1;
    var id2= req.params.id2;

    console.log("Get reponses GET", req.body , req.params);
    noteRapiditePayer.getreponse(id1,id2,function(err,rows){
       

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
    noteRapiditePayer.getreponseSociete(id,function(err,rows){

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
