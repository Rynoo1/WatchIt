const express = require('express')

const WatchSchema = require('../models/watches')

const router = express();

//get all watches
router.get('/api/getwatches', async(req, res) => {
    const findWatches = await WatchSchema.find()
    res.json(findWatches)
})

//get specific watch
router.get('/api/watch/:id', async(req, res) => {
    const findWatch = await WatchSchema.findById(req.params.id)
    res.json(findWatch)
})

//add watches
router.post('/api/addwatch', async(req, res) => {
    const watch = new WatchSchema({ ...req.body})
    await watch.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//update watches
router.put('/api/watch/:id', async(req, res) => {
    await WatchSchema.findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//delete
router.delete('/api/watch/:id', async(req, res) => {
    const {id} = req.params.id;
    await WatchSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;