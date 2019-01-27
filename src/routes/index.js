const router = require('express').Router();
const postRequest = require('./postRequest');
const messages = require('./messages');

router.use('/postRequest', postRequest);
router.use('/messages', messages);

module.exports = router;