var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./Administartion/router/router.js')(app);
 
const db = require('./Administartion/config/db.config.js');



app.use(cors());

var SocieteController = require('./societe/SocieteController');
app.use('/societe', SocieteController);

var PointVenteController = require('./point-vente/PointVenteController');
app.use('/point-vente',PointVenteController);

var ConcurrentSocieteController = require('./concurrent-societe/ConcurrentSocieteController');
app.use('/concurrent-societe',ConcurrentSocieteController);

var QuestionnaireController = require('./questionnaire/QuestionnaireController');
app.use('/questionnaire',QuestionnaireController);

var QuestionController = require('./question/QuestionController');
app.use('/question',QuestionController);

var ThemesController = require('./themes/ThemesController');
app.use('/themes',ThemesController);




var QuestionController = require('./Questions/QuestionsController');
app.use('/Questions',QuestionController);

var DetailsController = require('./details/detailsController');
app.use('/details',DetailsController);



var ServicesController = require('./services/servicesController');
app.use('/services',ServicesController);


var ChoixQuestionController = require('./choix-questionnaire/choix-questionnaireController');
app.use('/choix-questionnaire',ChoixQuestionController);



var pointVenteIdController = require('./point-vente-id/point-vente-idController');
app.use('/point-vente-id',pointVenteIdController);

var reponsesController = require('./reponses/reponsesController');
app.use('/reponses',reponsesController);


var npsController = require('./nps/npsController');
app.use('/nps',npsController);

var noteimageprixcontroller= require('./noteImagePrix/noteimageprixController');
app.use('/noteImagePrix',noteimageprixcontroller);




var promotionsController = require('./promotions/promotionsController');
app.use('/promotions',promotionsController);




var noteQualiteProduitController = require('./noteQualiteProduit/noteQualiteProduitController');
app.use('/noteQualiteProduit',noteQualiteProduitController);



var noteAmabilitePersonnelController = require('./noteAmabilitePersonnel/noteAmabilitePersonnelController');
app.use('/noteAmabilitePersonnel',noteAmabilitePersonnelController);



var noteRapportQualitePrixController = require('./noteRapportQualitePrix/noteRapportQualitePrixController');
app.use('/noteRapportQualitePrix',noteRapportQualitePrixController);




var noteRapiditePayerController = require('./noteRapiditePayer/noteRapiditePayerController');
app.use('/noteRapiditePayer',noteRapiditePayerController);



var noteQualiteMaterielController= require('./noteQualiteMateriel/noteQualiteMaterielController');
app.use('/noteQualiteMateriel',noteQualiteMaterielController);



var noteChoixProduitsController= require('./noteChoixProduits/noteChoixProduitsController');
app.use('/noteChoixProduits',noteChoixProduitsController);




var noteFaciliteTrouverProduitController= require('./noteFaciliteTrouverProduit/noteFaciliteTrouverProduitController');
app.use('/noteFaciliteTrouverProduit',noteFaciliteTrouverProduitController);




var notePrixProduitBioController= require('./notePrixProduitBio/notePrixProduitBioController');
app.use('/notePrixProduitBio',notePrixProduitBioController);






var noteQualiteProduitBioController= require('./noteQualiteProduitBio/noteQualiteProduitBioController');
app.use('/noteQualiteProduitBio',noteQualiteProduitBioController);





var pointeVenteReponseController = require('./pointeVenteReponse/pointeVenteReponseController');
app.use('/pointeVenteReponse',pointeVenteReponseController);

var concurrentController = require('./concurrent/concurrentController');
app.use('/concurrent',concurrentController);


var themepointeventeController = require('./themepointevente/themepointeventeController');
app.use('/themepointevente',themepointeventeController);


var themeconcurrentController= require('./themeconcurrent/themeconcurrentController');
app.use('/themeconcurrent',themeconcurrentController);


 
 
const Role = db.role;
 
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "USER"
    });
   
    Role.create({
      id: 2,
      name: "PM"
    });
   
    Role.create({
      id: 3,
      name: "ADMIN"
    });
  }



module.exports = app;