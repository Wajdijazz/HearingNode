var db = require('../db');

var noteimageprix = {

   



    getreponseSociete: function(id,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_societe='+id+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="prix_satisfaction"', callback);
    }




}

module.exports = noteimageprix;