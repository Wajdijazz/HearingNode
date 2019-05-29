
var db = require('../db');

var pointeVenteReponse = {


    createreponsepointevente: function (pointeVenteReponse, callback) {
        return db.query('Insert into reponse_pointeVente(id_societe,date_reponse_pointevente,nom,prix_satisfaction,promotions_satisfaction,Qualite_Produit_satisfaction,Amabilite_personnel_satisfaction,Rapport_qualite_prix_satisfaction,Rapidite_facilite_payer_satisfaction,Qualite_materiel_satisfaction,Choix_produits_satisfaction,Facilite_trouver_produits_satisfaction,Prix_produits_bio_satisfaction,Qualite_produits_bio_satisfaction,Fin_Sondage) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        	[pointeVenteReponse.id_societe,pointeVenteReponse.date_reponse_pointevente,pointeVenteReponse.nom,pointeVenteReponse.prix_satisfaction,pointeVenteReponse.promotions_satisfaction,pointeVenteReponse.Qualite_Produit_satisfaction,pointeVenteReponse.Amabilite_personnel_satisfaction,pointeVenteReponse.Rapport_qualite_prix_satisfaction,pointeVenteReponse.Rapidite_facilite_payer_satisfaction,pointeVenteReponse.Qualite_materiel_satisfaction,pointeVenteReponse.Choix_produits_satisfaction,pointeVenteReponse.Facilite_trouver_produits_satisfaction,pointeVenteReponse.Prix_produits_bio_satisfaction,pointeVenteReponse.Qualite_produits_bio_satisfaction,pointeVenteReponse.Fin_Sondage], callback);
    },

  getreponsepointevente: function(callback)
  {

    return db.query("SELECT * from reponse_pointeVente", callback);
   },


}

module.exports = pointeVenteReponse;
