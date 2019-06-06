var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var bcrypt = require('bcryptjs');


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

var ChoixQuestionController = require('./choix-questionnaire/choix-questionnaireController');
app.use('/choix-questionnaire',ChoixQuestionController);


var QuestionController = require('./Questions/QuestionsController');
app.use('/Questions',QuestionController);

var DetailsController = require('./details/detailsController');
app.use('/details',DetailsController);



var ServicesController = require('./services/servicesController');
app.use('/services',ServicesController);





var reponsesController = require('./reponses/reponsesController');
app.use('/reponses',reponsesController);






var pointeVenteReponseController = require('./pointeVenteReponse/pointeVenteReponseController');
app.use('/pointeVenteReponse',pointeVenteReponseController);

var concurrentController = require('./concurrent/concurrentController');
app.use('/concurrent',concurrentController);


var themepointeventeController = require('./themepointevente/themepointeventeController');
app.use('/themepointevente',themepointeventeController);


var themeconcurrentController= require('./themeconcurrent/themeconcurrentController');
app.use('/themeconcurrent',themeconcurrentController);


 
 
const Role = db.role;
const USER = db.user;
var pass="admin12345"
 
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  initial();

});
db.sequelize.sync({force: true}).then(() => {
  initialAdmin()

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

  function initialAdmin() {
   USER.create({
    id: 1,
    id_societe: null,
    name : "admin",
    username : "admin",
    email: "admin@gmail.com",
    roles : ["admin"],
    password: bcrypt.hashSync(pass, 8)
  
  }).then(user => {
  Role.findAll({
    where: {
     
    }
  }).then(roles => {
    user.setRoles(roles)
  })
})

}


module.exports = app;