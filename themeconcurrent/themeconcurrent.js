var db = require('../db');

var themeconcurrent = {

   
  

    getreponseConcurrentMagasin: function(id,pointevente,concurrent,callback)
    {

        return db.query("SELECT * from reponse_concurrent INNER JOIN questionnaire on questionnaire.id_societe="+id+" and questionnaire.id=reponse_concurrent.id_questionnaire and reponse_concurrent.pointevente='"+pointevente+"' and reponse_concurrent.concurrent='"+concurrent+"'", callback);
    },

    DeleteReponseConcurrentByIdQuestionnaire: function (id, callback) {
        return db.query('DELETE  from reponse_concurrent  WHERE  reponse_concurrent.id_questionnaire='+id, callback);
        	
    }

    






}

module.exports = themeconcurrent;