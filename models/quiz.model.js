const mongoose = require('mongoose');

// the quiz schema
const quizSchema = new mongoose.Schema(
    {
        link: {type: String, required: true},
        quizzes: {type: Array, required: true},
    },
    {
        timestamps: true
    });

quizSchema.set('collection', 'quizzes');
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;