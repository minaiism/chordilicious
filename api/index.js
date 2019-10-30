import Users from './routes/Users'
import Auth from "./routes/Auth";
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Set up default mongoose connection
mongoose.connect('mongodb://minaiism:Halapeno123!%40#@ds237588.mlab.com:37588/chordilicious', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(error => { console.log('caught', error.message)});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use('/users', Users);
app.use('/auth', Auth);

app.listen(port, () => {
    console.log('App listening on port: ' + port);
});