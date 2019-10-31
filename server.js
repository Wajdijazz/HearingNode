var app = require('./app');
var port = process.env.PORT || 3000;
var cors = require('cors');
var path = require("path");


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
app.use(cors());





var server = app.listen(port, function() {
    const all_routes = require('express-list-endpoints');
});
