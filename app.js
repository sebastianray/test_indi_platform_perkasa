const express = require("express")
const app = express()

const cors = require("cors")
const mongoose = require("mongoose")

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//cors
app.use(cors())

//mongodb config
const url = "mongodb://localhost:27017"
mongoose.Promise = global.Promise;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  poolSize: 1,
  dbName: 'database_students'
}
mongoose.connect(url, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"))
db.once("open", () => console.log("Connected to MongoDB!"))

// routes
const studentRoutes = require('./routes/student')
const errorHandler = require('./middlewares/errorHandler')

app.use("/api/v1/index", (req,res) => res.status(200).json("Welcome!"))
app.use("/api/v1/student", studentRoutes)

app.use(errorHandler)

//server
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`))
