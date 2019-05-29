var db = require('../db');

var noteimageprix = {

   
   


    getreponse: function(id2,pointevente,callback)
    {        return db.query("select * FROM reponse_pointeVente WHERE reponse_pointeVente.id_societe="+id2+" and reponse_pointeVente.nom='"+pointevente+"'", callback);

    },





}

module.exports = noteimageprix;