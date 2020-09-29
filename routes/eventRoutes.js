const { Router } = require('express');
const Event = require('../models/Event');
const router = Router();

router.get('/events', async (req, res) => {
  const events = await Event.find({});
  const eventsToClient = events.map(event => event.toClient());

  res.json(eventsToClient);
});

router.post('/events', async (req, res) => {
  const { title, date, icon } = req.body;

  const event = new Event({
    title,
    date,
    icon,
  });

  await event.save(function (err, event) {
    res.status(201).json({ id: event.id });
  });
});

router.put('/events/:id', async (req, res) => {
  const eventId = req.params.id;
  const { title, date, icon } = req.body;

  const event = await Event.findById(eventId);

  event.title = title;
  event.date = date;
  icon ? (event.icon = icon) : null;

  await event.save();
  res.status(204).send();
});

router.delete('/events/:id', async (req, res) => {
  const eventId = req.params.id;

  await Event.findByIdAndDelete(eventId);
  res.status(204).send();
});

module.exports = router;
