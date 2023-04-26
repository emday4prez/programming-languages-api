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

router.put('/:id', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;
