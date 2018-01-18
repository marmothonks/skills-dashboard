const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const apiRoutes = require('./server/routes/api');

// Set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/skillsgo');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// use the routes
app.use('/api', apiRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    // console.log(err);
    res.status(422).send({ error: err.message });
});

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
  });


// listen for requests
const port = 4000;
app.listen(process.env.port || port, () => {
    console.log('Running on localhost:' + port)
});
