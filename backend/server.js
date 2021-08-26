const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://C19_User:Presariocq57$$@cluster0.9z40c.gcp.mongodb.net/OnlineSuccess?retryWrites=true&w=majority";
// const PORT = 3000;

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

// // local image route
// app.use('/uploads', express.static('uploads'));



// Listen on port 3000
app.listen(3001, () => console.log('Server listening on port 3001'));