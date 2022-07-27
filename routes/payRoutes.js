const express = require('express');
const router = express.Router();
const controller = require('../controllers/payControllers');

router.get('/', controller.getForm);
router.post('/paystack/pay', controller.postForm);
router.get('/paystack/callback', controller.callback);
router.get('/receipt/:id', controller.receipt);
router.get('/error', controller.error);

module.exports = router;
