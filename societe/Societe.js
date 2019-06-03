var db = require('../db');

var Societe = {
    getsocietes: function(callback)
    {
        return db.query('SELECT * from societe', callback);
    },

    getsocieteById: function(id,callback)
    {
        return db.query('SELECT * from societe where societe.id='+id, callback);
    },
    createsociete: function (Societe, callback) {
        return db.query('Insert into societe(nom,type_abonnement,date_facturation) values(?, ?, ?)',
        	[Societe.nom, Societe.type_abonnement,Societe.date_facturation], callback);
    },
    DeletePointeVenteById: function (id,callback) {
        return db.query('DELETE from societe WHERE  societe.id='+id, callback);
        	
    }
}

module.exports = Societe;