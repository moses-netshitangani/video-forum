const router = require('express').Router();
let Quiz = require('../models/quiz.model');

// add quiz
router.route('/add').post(async (req, res) => {
    try {
        const quizObject = {
            link: req.body.link,
            quizzes: req.body.quizzes
        }
        const quiz = new Quiz(quizObject);
        console.log(`quiz object: ${quiz}`);

        quiz.save()
            .then(quiz => res.json(quiz))
            .then(console.log('Quiz successfully added.'))
            .catch(err => res.status(400).json("Error tryna save quiz") + err);
    } catch {
        res.status(500).send();
    }    
})

// retrieve quiz
router.route('/').get((req, res) => {
    Quiz.find()
        .then(quiz => res.json(quiz))
        .catch(err => res.status(400).json("Error tryna get admin") + err);
})

module.exports = router;