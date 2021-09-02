const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const URI = `${process.env.ATLAS_URI}`;
const PORT = process.env.PORT || 3001;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log("connected")
})
.catch(err => {
    console.log(err);
});

const connection = mongoose.connection;
connection.once('open', () => console.log("Successfully connected to database."));


// admin route
const userRouter = require('./routes/admin');
app.use('/setup', userRouter);

// stats route
const statsRouter = require('./routes/chart');
app.use('/stats', statsRouter);

// Listen on port 3000
app.listen(PORT, () => console.log('Server listening on port 3001'));