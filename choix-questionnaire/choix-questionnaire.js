var db = require('../db');

var Choix = {
    getQuestionsById: function(id,callback)
    {
        return db.query('SELECT questions.id, questions.qkey, questions.qlabel, questions.qorder, questions.qrequired, questions.qvalue, questions.qcontrolType,questions.qdependance from questions JOIN theme_questionnaire on questions.id_theme=theme_questionnaire.id_theme AND theme_questionnaire.id_questionnaire='+id+' ORDER BY questions.qorder', callback);
    }
}

module.exports = Choix;