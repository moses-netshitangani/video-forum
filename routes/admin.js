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
    Quiz.find().sort({createdAt: -1})
        .then(quiz => res.json(quiz))
        .catch(err => res.status(400).json("Error tryna get quiz") + err);
})

// update number of responses
router.route('/update').put(async (req, res) => {
    try
    {
        const question = req.body.question;
        const id = req.body.id;

        // update value
        Quiz.findOneAndUpdate({'_id': id, 'quizzes.question': question}, {'$inc': {
            'quizzes.$.resp': 1
        }})
        .then(q => res.json(q))
        .catch(err => res.status(400).json("Error trying to increment # of responses") + err);
    } catch {
        res.status(500).send();
    }
})

module.exports = router;