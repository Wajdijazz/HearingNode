
var db = require('../db');

var parametre = {
    createparametre: function (parametre, callback) {
        return db.query('Insert into parametre(id_societe,mots,date_stream) values(?,?,?)',
        	[parametre.id_societe,parametre.mots,parametre.date_stream], callback);
    },
    getparametreById: function(id,callback)
{
    return db.query("SELECT parametre.mots ,parametre.date_stream FROM parametre where parametre.id_societe="+id+" ORDER BY ID DESC LIMIT 1", callback);
},
DeleteParametreById: function (id,callback) {
    return db.query('DELETE from parametre WHERE  parametre.id='+id, callback);
        
}

}
module.exports = parametre;




