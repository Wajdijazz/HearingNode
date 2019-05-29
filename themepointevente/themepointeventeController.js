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



module.exports = router;
console.log(router)
