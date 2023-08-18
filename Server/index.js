const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const watchRoute = require('./routes/watches')

require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost3000'
}));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(watchRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'watchit', //Collection Name
}).then(() => console.log("Connected to watchit DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {console.log(`Server has started at port: ${PORT}`)});