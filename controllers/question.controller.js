const Question = require('../models/Question');
const mongoose = require('mongoose');



// create a new question
exports.createQuestion = (req, res) => {
    const question = new Question({
        _id: new mongoose.Types.ObjectId(),
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty,
        answerOptions: req.body.answerOptions,
        correctAnswer: req.body.correctAnswer,
        category: req.body.category
    });
    question.save()
        .then(result => {
            res.status(201).json({
                message: 'Question Created',
                question: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

