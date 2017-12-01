const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

// Set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/skillsgo');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// use the routes
app.use('/api', routes);

// error handling middleware
app.use((err, req, res, next) => {
    // console.log(err);
    res.status(422).send({ error: err.message });
});

// listen for requests
const port = 4000;
app.listen(process.env.port || port, () => {
    console.log('now listening for requests on :' + port)
});
