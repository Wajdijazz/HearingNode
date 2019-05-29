var db = require('../db');

var Details = {
  /*  getDetails: function(callback)
    {
        return db.query('SELECT questionnaire.id_questionnaire FROM questionnaire ORDER BY id_questionnaire DESC LIMIT 1', callback);
    },*/

    createDetails: function (Details, callback) {
        return db.query('Insert into theme_questionnaire(id_theme,id_questionnaire) values(?, ?)',
        	[Details.id_theme,Details.id_questionnaire], callback);
    }
    
}

module.exports = Details;