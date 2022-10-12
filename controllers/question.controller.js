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

// get all questions
exports.getAllQuestions = (req, res) => {
    Question.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                questions: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// get a question by id
exports.getQuestionById = (req, res) => {
    const id = req.params.id;
    Question.findById(id).exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    question
                });
            } else {
                return res.status(404).json({
                    message: 'No valid entry found for provided ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}

// update a question by id
exports.updateQuestionById = (req, res) => {
    const id = req.params
    Question.updateOne({ _id: id }, { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Question Updated',
                question: result
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}

// delete a question by id
exports.deleteQuestionById = (req, res) => {
    const id = req.params.id;
    Question.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Question Deleted',
                question: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// get all questions by category
exports.getAllQuestionsByCategory = (req, res) => {
    const category = req.params.category;
    Question.find({ category: category })
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                questions: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// get all questions by difficulty
exports.getAllQuestionsByDifficulty = (req, res) => {
    const difficulty = req.params.difficulty;
    Question.find({ difficulty: difficulty })
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                questions: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// get all questions by category and difficulty
exports.getAllQuestionsByCategoryAndDifficulty = (req, res) => {
    const category = req.params.category;
    const difficulty = req.params.difficulty;
    Question.find({ category: category, difficulty: difficulty })
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                questions: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}



