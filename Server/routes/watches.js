const express = require('express')
const WatchSchema = require('../models/watches')
const router = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

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
    try {
        const findWatch = await WatchSchema.findById(req.params.id)
        if (!findWatch) {
            res.status(404).json({ error: "Prodct not found" });
        } else {
            res.json(findWatch)
        }
    } catch (error) {
        res.status(500).json({ error: "It seems an error occured while fetching this product :/" });
    }
})

//filter straps
router.get('/api/strapwatches/:strap', async (req, res) => {
    const findStraps = await WatchSchema.find()
        .where("strap")
        .in(req.params.strap)
        .then(findStraps => {
            res.json(findStraps)
        })
        .catch(error => res.status(500).json(error))
})

//filter brands
router.get('/api/brandwatches/:brand', async (req, res) => {
    const findBrands = await WatchSchema.find()
        .where("brand")
        .in(req.params.brand)
        .then(findBrands => {
            res.json(findBrands)
        })
        .catch(error => res.status(500).json(error))
})

//newest first
router.get('/api/newest', async (req, res) => {
    try {
        const newestItems = await WatchSchema.find()
            .sort({ _id: -1 })
            .limit(3);

        res.json(newestItems)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
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

        const existing = await WatchSchema.findById(req.params.id);
        if (existing.image) {
            fs.unlink(`./images/${existing.image}`, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
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
    try {
        const watch = await WatchSchema.findById(req.params.id);
        if (!watch) {
            return res.status(404).json({ message: "Watch not Found!" });
        }

        if (watch.image) {
            fs.unlink(`./images/${watch.image}`, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        await watch.deleteOne();
        res.status(201).json({ message: "Watch successfully deleted!" });
    } catch (error) {
        console.error("Error deleting Watch: ", error);
        res.status(500).json(error);
    }
})


module.exports = router;