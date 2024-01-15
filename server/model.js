const mongoose = require('./db');
const initItems = require('./tasks')

const taskSchema = new mongoose.Schema({
  task: String,
  shortText: String,
  interval: Number,
  lastChecked: Number,
});

const Tasks= mongoose.model('task', taskSchema);

// Tasks.create(initItems); //!! uncomment me and run the server once to populate mongo with some default data



module.exports = Tasks;