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
        .catch(err => res.status(400).json("Error tryna get admin") + err);
})

// update stats
router.route('/update').put(async (req, res) => {
    try
    {
        const title = req.body.title;
        // const val = req.params.value;
        console.log(`TITLE IS ${title}`);

        Quiz.findOneAndUpdate({'quizzes.stats.title': title}, {'$set': {
            'quizzes.$.stats.$.value': 10
        }})
        .then(q => console.log(q))
        .catch(err => console.log(err));
    } catch {
        res.status(500).send();
    }

    // {
    //     _id: 1,
    //     name: 'John Smith',
    //     items: [{
    //        id: 1,
    //        name: 'item 1',
    //        value: 'one'
    //     },{
    //        id: 2,
    //        name: 'item 2',
    //        value: 'two'
    //     }]
    //   }

    //   Person.update({'items.id': 2}, {'$set': {
    //     'items.$.name': 'updated item2',
    //     'items.$.value': 'two updated'
    // }}
})

module.exports = router;