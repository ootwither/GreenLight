const mongoose = require('./db');
const initItems = require('./tasks')

const taskSchema = new mongoose.Schema({
  task: String,
  shortText: String,
  interval: Number,
  lastChecked: Number,
});

const Tasks= mongoose.model('task', taskSchema);

if (Tasks.find().length == 0) { // populates the DB with default items on startup
  Tasks.create(initItems);
}

module.exports = Tasks;