'use strict';

const task = require('./model');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await task.find();
    res.send(tasks);
    res.status(200);
  } catch (e) {
    res.status(500);
  }
};

exports.postTask = async (req,res) => {
  try {
    if (!req.body.task || !req.body.shortText || !req.body.interval) {
      res.status(400);
      res.send('Error: missing parameter(s)');
    }
    await task.create(req.body);
    res.status(201);
    res.send(req.body);
  } catch (e) {
    res.status(500);
  }
};