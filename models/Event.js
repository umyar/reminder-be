const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
});

eventSchema.method('toClient', function() {
  const obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;

  return obj;
});

module.exports = model('Event', eventSchema);
