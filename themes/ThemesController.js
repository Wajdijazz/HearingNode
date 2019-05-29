var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Themes = require('./themes');

router.get('/', function (req, res) {
    console.log("Themes GET", req.body);
    Themes.getthemes(function(err,rows){
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