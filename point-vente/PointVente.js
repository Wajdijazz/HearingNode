var db = require('../db');

var PointVente = {
    getpointsvente: function(callback)
    {
        return db.query('SELECT * from pointvente', callback);
    },
    getpointsventeById: function(id,callback)
    {
        return db.query('SELECT * from pointvente WHERE pointvente.id='+id, callback);
    },
    createpointvente: function (PointVente, callback) {
        return db.query('Insert into pointvente(id_societe,nom,adresse) values(?, ?, ?)',
        	[PointVente.id_societe,PointVente.nom,PointVente.adresse], callback);
    }
}

module.exports = PointVente;