const express = require('express')
const router = express.Router();

const userCheck= require('../utills/userCheck')
const tokenCheck= require('../utills/is-auth')
const scoresController= require('../controller/score')

router.get('/getScores',tokenCheck, userCheck, scoresController.getScores);

router.post('/addScore', tokenCheck, userCheck, scoresController.postScore);
router.get('/scoreSummary', tokenCheck, userCheck, scoresController.scoreSummary)

module.exports= router