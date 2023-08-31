const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const watchRoute = require('./routes/watches');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { path } = require('./routes/watches');

require('dotenv/config')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single('file'), (req, res) => {

})