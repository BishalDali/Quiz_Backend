const questionController = require('../controllers/question.controller');
const router = require('express').Router();

router.get('/question/', questionController.getQuestions);
router.get('/question/:id', questionController.getQuestionById);
router.post('/question/', questionController.createQuestion);
router.put('/question/:id', questionController.updateQuestion);
router.delete('/question/:id', questionController.deleteQuestion);
router.get('/question/category/:category', questionController.getQuestionsByCategory);
router.get('/question/difficulty/:difficulty', questionController.getQuestionsByDifficulty);


module.exports = router;