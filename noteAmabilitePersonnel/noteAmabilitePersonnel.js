var db = require('../db');

var noteAmabilitePersonnel = {

   
   


    getreponse: function(id1,id2,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_pointvente='+id1+' and questionnaire.id_societe='+id2+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="Amabilite_personnel_satisfaction"', callback);
    },


    getreponseSociete: function(id,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_societe='+id+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="Amabilite_personnel_satisfaction"', callback);
    }




}

module.exports = noteAmabilitePersonnel;