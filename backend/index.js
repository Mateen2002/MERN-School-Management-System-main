const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

//const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(
        "mongodb+srv://admin:KD8rdijHu71gCO4Z@cluster0.na3zxat.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(5000);
        console.log("Database is connected ");
    })
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));


app.use('/', Routes);

//app.listen(PORT, () => {
//    console.log(`Server started at port no. ${PORT}`)
//})