const express = require('express');
const mongoose = require('mongoose');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config

const db = require('./config/keys').mongoURI;

// Connect to Mongo DB
mongoose.connect(db)
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/',(req, res)=> res.send('Hello World!!!'));

// use Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',profile);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port}`))

