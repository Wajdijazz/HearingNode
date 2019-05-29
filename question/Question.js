var db = require('../db');

var Question = {
    getQuestions: function(callback)
    {
        return db.query('SELECT * from questions', callback);
    },//TODO Isertion question into data base 
    createQuestion: function (Question, callback) {
        return db.query('Insert into questions(libelle, coefficient) values(?, ?)',[Question.libelle, Question.coefficient], callback);
    },
    getQuestion: function(id,callback)
    {
        return db.query('SELECT * from questions WHERE qidquestionnaire='+id+' ORDER BY qorder', callback);
    },
}

module.exports = Question;
