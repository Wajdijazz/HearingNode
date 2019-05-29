var db = require('../db');

var Questionnaire = {
    getquestionnaires: function(callback)
    {
        return db.query('SELECT * from questionnaire', callback);
    },
    createquestionnaire: function (Questionnaire, callback) {
        return db.query('Insert into questionnaire(id_societe,sujet) values( ?, ?)',
        	[Questionnaire.id_societe,Questionnaire.sujet], callback);
    },
    getquestionnaire: function(id,callback)
    {
        return db.query('SELECT * from questionnaire WHERE id='+id, callback);
    }
}


module.exports = Questionnaire;