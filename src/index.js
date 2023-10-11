const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tp1");

app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require('../src/routes/musicRoute');
app.use('/music', musicRoute);

const voteRoute = require('../src/routes/voteRoute');
app.use('/', voteRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})