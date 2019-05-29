
var db = require('../db');

var concurrent = {


    createreponseconcurrent: function (concurrent, callback) {
        return db.query('Insert into reponse_concurrent(id_societe,pointevente,date_reponse_concurrent,concurrent,prix_concurrent,promotions_concurrent,Qualite_Produit_concurrent,Amabilite_personnel_concurrent,Rapport_qualite_prix_concurrent,Rapidite_facilite_payer_concurrent,Qualite_materiel_concurrent,Choix_produits_concurrent,Facilite_trouver_produits_concurrent,Prix_produits_bio_concurrent,Qualite_produits_bio_concurrent) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        	[concurrent.id_societe,concurrent.pointevente,concurrent.date_reponse_concurrent,concurrent.concurrent,concurrent.prix_concurrent,concurrent.promotions_concurrent,concurrent.Qualite_Produit_concurrent,concurrent.Amabilite_personnel_concurrent,concurrent.Rapport_qualite_prix_concurrent,concurrent.Rapidite_facilite_payer_concurrent,concurrent.Qualite_materiel_concurrent,concurrent.Choix_produits_concurrent,concurrent.Facilite_trouver_produits_concurrent,concurrent.Prix_produits_bio_concurrent,concurrent.Qualite_produits_bio_concurrent], callback);
    },

  getConcurrent: function(callback)
  {

    return db.query("SELECT * from reponse_concurrent", callback);
   },

   getConcurrentByIdSociete: function(id,callback)
   {
 
     return db.query("SELECT * from reponse_concurrent where reponse_concurrent.id_societe="+id, callback);
    }

}

module.exports = concurrent;
