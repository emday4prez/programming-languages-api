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

module.exports = router;
