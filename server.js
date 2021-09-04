const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URI || "mongodb+srv://C19_User:Presariocq57$$@cluster0.9z40c.gcp.mongodb.net/OnlineSuccess?retryWrites=true&w=majority";
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

// serve static assets
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Listen on designated port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

