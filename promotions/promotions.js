var db = require('../db');

var promotions = {

   
   



    getreponseSociete: function(id,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_societe='+id+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="promotions_satisfaction"', callback);
    }




}

module.exports = promotions;