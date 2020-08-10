const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongodb:27017/docker-test', () => {
    console.log('Mongodb is connected...')
})

app.get('/', (req,res) => {
    res.send("hello world")
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})