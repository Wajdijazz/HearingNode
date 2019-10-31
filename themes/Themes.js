var db = require('../db');

var Themes = {
    getthemes: function(callback)
    {
        return db.query('SELECT * from themes', callback);
    },
    DeleteReponseByPointevente: function (pointevente, callback) {
        return db.query("DELETE  from reponse_pointeVente  WHERE  reponse_pointeVente.nom="+"'"+pointevente+"'", callback);
        	
    },
}

module.exports = Themes;