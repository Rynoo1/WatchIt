const express = require('express')
const WatchSchema = require('../models/watches')
const router = express();
const path = require('path');
const multer = require('multer');

//get all watches
router.get('/api/getwatches', async (req, res) => {
    try {
        const findWatches = await WatchSchema.find();
        res.json(findWatches);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get specific watch
router.get('/api/watch/:id', async (req, res) => {
    const findWatch = await WatchSchema.findById(req.params.id)
    .then(res.json(findWatch))
    .catch(error => res.status(500).json(error))
})

//filter straps
router.get('/api/strapwatches/:strap', async (req, res) => {
    const findStraps = await WatchSchema.find()
        .where("strap")
        .in(req.params.strap)
    .then(res.json(findStraps))
    .catch(error => res.status(500).json(error))
})

//filter brands
router.get('/api/brandwatches/:brand', async (req, res) => {
    const findBrands = await WatchSchema.find()
        .where("brand")
        .in(req.params.brand)
    .then(res.json(findBrands))
    .catch(error => res.status(500).json(error))
})

//filter straps
router.get('/api/strapwatches/:strap', async (req, res) => {
    const findStraps = await WatchSchema.find()
        .where("strap")
        .in(req.params.brand)
    .then(res.json(findStraps))
    .catch(error => res.status(500).json(error))
})

//newest first
router.get('/api/newest', async (req, res) => {
    try {
        const newestItems = await WatchSchema.find()
        .sort({ _id: -1})
        .limit(3);
        
        res.json(newestItems)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error'});
    }
})

//Middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})


//add watches
router.post('/api/addwatch', upload.single('image'), async (req, res) => {

    let data = JSON.parse(req.body.information)
    // const watch = new WatchSchema({ ...req.body})
    if (req.file) {
        const watch = new WatchSchema({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description,
            image: req.file.filename
        })
        await watch.save()
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    } else {
        const watch = new WatchSchema({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description,
            image: ''
        })
        await watch.save()
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    }
})

//update watches
router.put('/api/watch/:id', upload.single('imageUp'), async (req, res) => {

    let data = JSON.parse(req.body.information)
    if (req.file) {
        const update = ({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description,
            image: req.file.filename
        })
        await WatchSchema.findByIdAndUpdate(req.params.id, update)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    } else {
        const update = ({
            brand: data.brand,
            model: data.model,
            year: data.year,
            strap: data.strap,
            size: data.size,
            price: data.price,
            stock: data.stock,
            description: data.description
        })
        await WatchSchema.findByIdAndUpdate(req.params.id, update)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    }
})

//delete
router.delete('/api/watch/:id', async (req, res) => {
    await WatchSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router;