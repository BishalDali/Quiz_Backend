const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    answerOptions: {
        type: Array,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);