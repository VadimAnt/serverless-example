const router = require('express').Router();
const MessageController = require('../controllers/message.controller');

router.post('/', MessageController.index);

module.exports = router;
