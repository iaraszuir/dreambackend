const router = require('express').Router();
const storiesModel = require('../../models/stories.model');

router.post('/new', async (req, res) => {
    try {
        const [result] = await storiesModel.create(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = router;