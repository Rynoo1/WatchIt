const express = require('express')

const WatchSchema = require('../models/watches')

const router = express();

//add products
router.post('/api/addwatch', async(req, res) => {
    const watch = new WatchSchema({ ...req.body})
    await watch.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;