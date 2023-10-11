const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/apinode");

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})