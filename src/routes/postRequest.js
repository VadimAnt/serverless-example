const router = require('express').Router();
const RequestController = require('../controllers/request.controller');

router.post('/', RequestController.index);

module.exports = router;
