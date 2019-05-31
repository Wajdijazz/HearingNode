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
    },
    DeleteQuestionnaireById: function (id,id_societe, callback) {
        return db.query('DELETE from questionnaire WHERE  questionnaire.id='+id+'  and questionnaire.id_societe='+id_societe, callback);
        	
    }
}


module.exports = Questionnaire;