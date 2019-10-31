
var db = require('../db');

var concurrent = {


    createreponseconcurrent: function (concurrent, callback) {
        return db.query('Insert into reponse_concurrent(id_questionnaire,pointevente,date_reponse_concurrent,concurrent,prix_concurrent,promotions_concurrent,Qualite_Produit_concurrent,Amabilite_personnel_concurrent,Rapport_qualite_prix_concurrent,Rapidite_facilite_payer_concurrent,Qualite_materiel_concurrent,Choix_produits_concurrent,Facilite_trouver_produits_concurrent,Prix_produits_bio_concurrent,Qualite_produits_bio_concurrent) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        	[concurrent.id_questionnaire,concurrent.pointevente,concurrent.date_reponse_concurrent,concurrent.concurrent,concurrent.prix_concurrent,concurrent.promotions_concurrent,concurrent.Qualite_Produit_concurrent,concurrent.Amabilite_personnel_concurrent,concurrent.Rapport_qualite_prix_concurrent,concurrent.Rapidite_facilite_payer_concurrent,concurrent.Qualite_materiel_concurrent,concurrent.Choix_produits_concurrent,concurrent.Facilite_trouver_produits_concurrent,concurrent.Prix_produits_bio_concurrent,concurrent.Qualite_produits_bio_concurrent], callback);
    },

  getConcurrent: function(callback)
  {

    return db.query("SELECT * from reponse_concurrent", callback);
   },

   getAllConcurrentReponse: function(id,callback)
   {
 
     return db.query('SELECT * from reponse_concurrent INNER JOIN questionnaire on questionnaire.id_societe='+id+' and questionnaire.id=reponse_concurrent.id_questionnaire', callback);
    },
    DeleteReponseConcurrentByPointVente: function (pointevente, callback) {
      return db.query("DELETE  from reponse_concurrent  WHERE  reponse_concurrent.pointevente="+"'"+pointevente+"'", callback);
        
  
}

}

module.exports = concurrent;
