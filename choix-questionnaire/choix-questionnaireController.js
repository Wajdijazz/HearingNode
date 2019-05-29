var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Questions = require('./choix-questionnaire');

router.get('/:id', function (req, res) {
    var id = req.params.id;

    console.log("Questions GET  By Id", req.body);
    Questions.getQuestionsById(id,function(err,rows){
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