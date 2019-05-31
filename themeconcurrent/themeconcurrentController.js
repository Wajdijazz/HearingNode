var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var themeconcurrent= require('./themeconcurrent');







router.get('/:id/:pointevente/:concurrent', function (req, res) {
    var id=req.params.id
    var pointevente= req.params.pointevente;
    var concurrent= String(req.params.concurrent);



    console.log("Get reponses concurrent GET", req.body , req.params);
    themeconcurrent.getreponseConcurrentMagasin(id,pointevente,concurrent,function(err,rows){
       console.log(rows)

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
