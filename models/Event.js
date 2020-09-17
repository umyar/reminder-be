const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});

module.exports = model('event', eventSchema);
