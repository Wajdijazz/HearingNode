var db = require('../db');

var Services = {

   
   getquestionnaireid: function(callback)
    {
        return db.query('SELECT questionnaire.id FROM questionnaire ORDER BY id DESC LIMIT 1', callback);
    },


getpointventeBySociete: function(id,callback)
    {
        return db.query('select * from pointvente WHERE pointvente.id_societe='+id+' ORDER BY id', callback);
    },


    getreponses: function(id1,id2,callback)
    {
        return db.query('select * FROM reponses INNER JOIN questionnaire on questionnaire.id_pointvente='+id1+' and questionnaire.id_societe='+id2+' and questionnaire.id=reponses.id_questionnaire and reponses.theme_key="Fin Sondage"', callback);
    },





}

module.exports = Services;