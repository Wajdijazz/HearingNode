var db = require('../db');

var Reponses = {
    
    createreponses: function (Reponses, callback) {
        return db.query('Insert into reponses(id_questionnaire,date_reponse,theme_key,reponse) values(?, ?, ?, ?)',
        	[Reponses.id_questionnaire, Reponses.date_reponse, Reponses.theme_key,Reponses.reponse], callback);
    },

    getreponse: function(callback)
    {
  
      return db.query("SELECT * from reponse_pointeVente", callback);
     },

DeleteReponseConcurrentByConcurrent: function (concurrent, callback) {
  return db.query("DELETE  from reponse_concurrent  WHERE  reponse_concurrent.concurrent="+"'"+concurrent+"'", callback);
    

}
}
module.exports = Reponses;