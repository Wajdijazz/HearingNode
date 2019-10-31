var db = require('../db');



var verbatime = {

    createreponseverbatime: function (verbatime, callback) {
        return db.query('Insert into verbatime(id_questionnaire,prix_motivation,promotions_motivation,Qualite_Produit_motivation,Amabilite_personnel_motivation,Rapport_qualite_prix_motivation,Rapidite_facilite_payer_motivation,Qualite_materiel_motivation,Choix_produits_motivation,Facilite_trouver_produits_motivation,Prix_produits_bio_motivation,Qualite_produits_bio_motivation) values(?,?,?,?,?,?,?,?,?,?,?,?)',
          [verbatime.id_questionnaire,verbatime.prix_motivation,verbatime.promotions_motivation,verbatime.Qualite_Produit_motivation,verbatime.Amabilite_personnel_motivation,verbatime.Rapport_qualite_prix_motivation,verbatime.Rapidite_facilite_payer_motivation,verbatime.Qualite_materiel_motivation,verbatime.Choix_produits_motivation,verbatime.Facilite_trouver_produits_motivation,verbatime.Prix_produits_bio_motivation,verbatime.Qualite_produits_bio_motivation], callback);
    },
    getverbatime: function(id,callback)
    {
        return db.query('SELECT * from verbatime INNER JOIN questionnaire on verbatime.id_questionnaire=questionnaire.id and questionnaire.id_societe='+id, callback);
    },
    DeleteReponseByIdQuestionnaire: function (id, callback) {
        return db.query('DELETE  from verbatime  WHERE  verbatime.id_questionnaire='+id, callback);
        	
    },
 
  
}

module.exports = verbatime;