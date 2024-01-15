'use strict';

const router = require('express').Router();
const controller = require('./controller.js');

router.get('/tasks', controller.getTasks);
router.post('/tasks', controller.postTask);
router.put('/tasks', controller.updateTask);

module.exports = router;
