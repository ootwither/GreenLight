'use strict';

const router = require('express').Router();
const controller = require('./controller.js');

router.get('/tasks', controller.getTasks);
router.post('/events', controller.postTask);

module.exports = router;
