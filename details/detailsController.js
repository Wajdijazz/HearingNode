var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Details = require('./details');

router.get('/', function (req, res) {
    console.log("details GET", req.body);
    Details.getDetails(function(err,rows){
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
    console.log("details POST", req.body);
    Details.createDetails(req.body,function(err,count){
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
    var id=req.params.id

    Details.DeleteReponseByIdQuestionnaire(id,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});


router.get('/:id', function (req, res) {
    var id= req.params.id;

    Details.getparametreById(id,function(err,rows){
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