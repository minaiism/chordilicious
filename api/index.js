import User from "./models/Users/User/user";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mockResponse = {
    name: 'Martyna',
    surname: 'Wójcik'
};
app.get('/users/:uid', (req, res) => {
    res.send({...mockResponse, id: req.params.uid });
});

app.post('/users', (req, res) => {
    User.create(req.body);
    res.send(req.body);
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});