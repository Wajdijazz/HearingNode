var db = require('../db');

var themepointevente = {

   
   


    getreponse: function(id2,pointevente,callback)
    {        return db.query("select * FROM reponse_pointeVente INNER JOIN questionnaire on questionnaire.id_societe="+id2+" and questionnaire.id=reponse_pointeVente.id_questionnaire and reponse_pointeVente.nom='"+pointevente+"'", callback);


    },
    DeleteQuestionnaireById: function (id,id_societe, callback) {
        return db.query('DELETE questionnaire,reponse_pointeVente,reponse_concurrent from questionnaire JOIN reponse_pointeVente,reponse_concurrent  WHERE  questionnaire.id='+id+'  and questionnaire.id_societe='+id_societe, callback);
        	
    },





}

module.exports = themepointevente;