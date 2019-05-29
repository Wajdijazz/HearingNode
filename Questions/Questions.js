var db = require('../db');

var Questions = {
    getQuestionsById: function(id,callback)
    {
        return db.query('SELECT questions.qkey,questions.qlabel,questions.qorder,questions.qrequired,questions.qvalue,questions.qcontrolType,questions.qdependance from questions JOIN theme_questionnaire on questions.id_theme=theme_questionnaire.id_theme AND theme_questionnaire.id_questionnaire='+id+'ORDER BY questions.qorder', callback);
    },

    createQuestions: function (Questions, callback) {
        return db.query('Insert into questions(theme,Sujet_Questionnaire) values(?, ?)',
        	[Questions.theme,Questions.Sujet_Questionnaire], callback);
    }
    
}

module.exports = Questions;