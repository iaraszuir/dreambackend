const router = require('express').Router();

router.use('/stories', require('./stories.route'));

module.exports = router;