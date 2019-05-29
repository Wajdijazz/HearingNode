var db = require('../db');

var themeconcurrent = {

   
   


    getreponseConcurrent: function(id,callback)
    {
        return db.query("SELECT * from reponse_concurrent where reponse_concurrent.id_societe="+id, callback);
    },

    getreponseConcurrentMagasin: function(pointevente,concurrent,callback)
    {

        return db.query("SELECT * from reponse_concurrent WHERE reponse_concurrent.pointevente='"+pointevente+"' and reponse_concurrent.concurrent='"+concurrent+"'", callback);
    },


    






}

module.exports = themeconcurrent;