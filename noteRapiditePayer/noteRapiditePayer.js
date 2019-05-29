var db = require('../db');

var noteRapiditePayer = {

   
   


    getreponse: function(id1,id2,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_pointvente='+id1+' and questionnaire.id_societe='+id2+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="Rapidite_facilite_payer_satisfaction"', callback);
    },


    getreponseSociete: function(id,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_societe='+id+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="Rapidite_facilite_payer_satisfaction"', callback);
    }




}

module.exports = noteRapiditePayer;