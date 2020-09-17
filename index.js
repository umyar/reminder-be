const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const secrets = require('./secrets');
const eventRoutes = require('./routes/eventRoutes');

mongoose.connect(
  `mongodb+srv://umyar:${secrets.mongoosePassword}@cluster1.hkcyq.mongodb.net/reminder-events`,
  { useNewUrlParser: true },
);

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(204).json({});
  }
  next();
});

app.use(eventRoutes);

app.listen(9000, () => console.log('Backend started on 9000 port!'));
