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
        return db.query('DELETE questionnaire from questionnaire WHERE  questionnaire.id='+id+'  and questionnaire.id_societe='+id_societe, callback);
        	
    },
    DeleteQuestionnaireByIdSociete: function (id_societe, callback) {
        return db.query('DELETE questionnaire,reponse_pointeVente,reponse_concurrent,verbatime,theme_questionnaire from questionnaire JOIN reponse_pointeVente,reponse_concurrent,verbatime,theme_questionnaire WHERE reponse_pointeVente.id_questionnaire=questionnaire.id and reponse_concurrent.id_questionnaire=questionnaire.id and verbatime.id_questionnaire=questionnaire.id and theme_questionnaire.id_questionnaire=questionnaire.id and questionnaire.id_societe='+id_societe, callback);
        	
    },
    DeleteReponseByIdQuestionnaire: function (id, callback) {
        return db.query('DELETE  from reponse_pointeVente  WHERE  reponse_pointeVente.id_questionnaire='+id, callback);
        	
    },



}


module.exports = Questionnaire;