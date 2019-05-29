var db = require('../db');

var point_vente_id = {
    getpointventbyid: function(id,callback)
    {
        return db.query('select pointvente.nom,pointvente.adresse FROM pointvente JOIN questionnaire where pointvente.id=questionnaire.id_pointvente and questionnaire.id='+id, callback);
    } 
}

module.exports = point_vente_id;