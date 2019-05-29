var db = require('../db');

var Themes = {
    getthemes: function(callback)
    {
        return db.query('SELECT * from themes', callback);
    },
    
}

module.exports = Themes;