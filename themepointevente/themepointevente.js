var db = require('../db');

var themepointevente = {

   
   


    getreponse: function(id2,pointevente,callback)
    {        return db.query("select * FROM reponse_pointeVente INNER JOIN questionnaire on questionnaire.id_societe="+id2+" and questionnaire.id=reponse_pointeVente.id_questionnaire and reponse_pointeVente.nom='"+pointevente+"'", callback);


    }





}

module.exports = themepointevente;