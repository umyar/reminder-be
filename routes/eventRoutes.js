const { Router } = require('express');
const Event = require('../models/Event');
const router = Router();

router.get('/', (req, res) => {
  console.log('req to mainPath');

  res.json('mainRoute response');
});

router.post('/events', async (req, res) => {
  const { title, date, icon } = req.body;
  console.log(title, date);

  const event = new Event({
    title,
    date,
  });

  await event.save();

  res.json({ status: 'ok', text: 'event saved' });
});

router.get('/events', async (req, res) => {
  const events = await Event.find({});

  res.json(events);
});

module.exports = router;
