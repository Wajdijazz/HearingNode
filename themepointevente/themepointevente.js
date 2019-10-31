var db = require('../db');

var themepointevente = {

   
   


    getreponse: function(id2,pointevente,callback)
    {        return db.query("select * FROM reponse_pointeVente INNER JOIN questionnaire on questionnaire.id_societe="+id2+" and questionnaire.id=reponse_pointeVente.id_questionnaire and reponse_pointeVente.nom='"+pointevente+"'", callback);


    },

    DeleteReponseByIdQuestionnaire: function (id, callback) {
        return db.query('DELETE  from reponse_pointeVente  WHERE  reponse_pointeVente.id_questionnaire='+id, callback);
        	
    },
    
 







}

module.exports = themepointevente;