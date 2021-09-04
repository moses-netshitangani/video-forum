const router = require('express').Router();
let Chart = require('../models/chart.model');

// add stats
router.route('/add').post(async (req, res) => {
    try {
        const statObject = {
            stats: req.body.stats
        }
        const stat = new Chart(statObject);
        console.log(`stat object: ${stat}`);

        stat.save()
            .then(stat => res.json(stat))
            .then(console.log('Stat successfully added.'))
            .catch(err => res.status(400).json("Error tryna save stat") + err);
    } catch {
        res.status(500).send();
    }    
})

// retrieve stat
router.route('/').get((req, res) => {
    Chart.find().sort({createdAt: -1})
        .then(stat => res.json(stat))
        .catch(err => res.status(400).json("Error tryna get admin") + err);
})

// update stats
router.route('/update').put(async (req, res) => {
    try
    {
        const title = req.body.title;
        const id = req.body.id;

        console.log(`TITLE IS ${title}`);

        Chart.findOneAndUpdate({'_id': id, 'stats.title': title}, {'$inc': {
            'stats.$.value': 1
        }})
        .then(q => res.json(q))
        .catch(err => res.status(400).json("Error trying to increment") + err);
    } catch {
        res.status(500).send();
    }
})

module.exports = router;