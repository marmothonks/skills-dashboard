const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja schema & model

const SkillSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    score: {
        type: Number,
        default: 0
    }
});

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;