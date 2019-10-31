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
    DeleteSocieteById: function (id,callback) {
        return db.query('DELETE from societe WHERE  societe.id='+id, callback);
        	
    },
    UpdatesocieteById: function (id,Societe,callback) {
        return db.query('UPDATE societe SET societe.nom=? , societe.type_abonnement = ? WHERE societe.id='+id, 
        [Societe.nom, Societe.type_abonnement,Societe.date_facturation], callback);
    },
}

module.exports = Societe;