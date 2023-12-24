const express = require('express');
const WordController = require('../controllers/word.controller');

const router = express.Router();

const wordController = new WordController();

router.get('/', wordController.getAll);

router.get('/:englishWord', wordController.getByEnglishWord);

module.exports = router;
