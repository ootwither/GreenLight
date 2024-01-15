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
    if (typeof req.body.task != 'string' || typeof req.body.shortText != 'string' || typeof req.body.interval != 'number') {
      res.status(400);
      res.send('Error: invalid type(s)');
    }
    const newTask = await task.create(req.body);
    res.status(201);
    res.send(newTask);
  } catch (e) {
    res.status(500);
  }
};

exports.updateTask = async (req, res) => {
  try {
    let filter = {_id: req.body._id};
    let update = {lastChecked: req.body.lastChecked};
    const updatedTask = await task.findOneAndUpdate(filter, update, {
      new: true
    });
    res.status(200);
    res.send(updatedTask);

  } catch (e) {
    res.status(500);
  }
}