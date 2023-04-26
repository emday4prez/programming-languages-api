const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

router.get('/', async (req, res, next) => {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error('error while getting list of programming languages');
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (e) {
    console.error('error while creating programming language');
    next(e);
  }
});

module.exports = router;
