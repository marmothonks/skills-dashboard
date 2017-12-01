const express = require('express');
const router = express.Router();
const Skill = require('../models/skill');

// get a list of skills from db
router.get('/skills', (req, res, next) => {
    Skill.find().then(function (skills) {
        res.send(skills);
    });
});

// add a new skill to the db
router.post('/skills', (req, res, next) => {
    Skill.create(req.body).then((skill) => {
        // send the created skill
        res.send(skill);
    }).catch(next);
});

// update a skill in the db
router.put('/skills/:id', (req, res, next) => {
    Skill.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Skill.findOne({ _id: req.params.id }).then((skill) => {
                res.send(skill);
            });
        });
});

// delete a skill from db
router.delete('/skills/:id', (req, res, next) => {
    Skill.findByIdAndRemove({ _id: req.params.id })
        .then((skill) => {
            res.send(skill);
        });
});

module.exports = router;