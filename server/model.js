const mongoose = require('./db');

const taskSchema = new mongoose.Schema({
  task: String,
  shortText: Date,
  interval: Number,
});

const Tasks= mongoose.model('task', taskSchema);

module.exports = Tasks;