const express = require('express');
const parser = require('body-parser');

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(204).json({});
  }
  next();
});

app.post('/events', function(req, res) {
  const { title, date, icon } = req.body;
  console.log(title, date);

    res.json({ status: 'ok', text: 'event saved'});
});

app.get('/events', function(req, res) {
  res.type('text/plain');
  res.send('❤️');
});

app.listen(9000, () => console.log('Backend started on 9000 port!'));
