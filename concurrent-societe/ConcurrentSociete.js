var db = require('../db');

var ConcurrentSociete = {
    getconcurrent: function(callback)
    {
        return db.query('SELECT * from concurrent', callback);
    },

    createconcurrent: function (ConcurrentSociete, callback) {
        return db.query('Insert into concurrent(id_societe,nom) values(?, ?)',
        	[ConcurrentSociete.id_societe,ConcurrentSociete.nom], callback);
    }
}

module.exports = ConcurrentSociete;