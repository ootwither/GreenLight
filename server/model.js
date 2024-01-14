const mongoose = require('./db');

const taskSchema = new mongoose.Schema({
  task: String,
  shortText: String,
  interval: Number,
  lastChecked: Number,
});

const Tasks= mongoose.model('task', taskSchema);

module.exports = Tasks;