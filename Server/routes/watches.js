const express = require('express')

const WatchSchema = require('../models/watches')

const router = express();

//Read all
router.get('/api/getwatches', async(req, res) => {
    const findWatches = await WatchSchema.find()
    res.json(findWatches)
})

//Add user
router.post('/api/addwatch', async(req, res) => {
    const watch = new WatchSchema({ ...req.body})
    await watch.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;