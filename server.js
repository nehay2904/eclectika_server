// importing the requirements

const express = require('express')
const app = express()
app.use(express.json())



const mongoose = require("mongoose")

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const cors = require('cors')
app.use(cors())

require('dotenv').config();



const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;


//connection of mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connection is success')
}).catch((err) => {
  console.log(err)
})


app.get('/', (req, res) => {
  res.send("hello world")
})


app.listen(PORT, (req, res) => {
  console.log(`server is responding on ${PORT}`)
})