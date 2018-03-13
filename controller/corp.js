const express = require('express');
const router = express.Router();
const service = require('../service/counterparty.js');

router.get('/v1/ccb/signup/order/counterparty', function(req, res) {
    service.getCounterpartyList(req).then(response => {
        res.send(response);
    });
});

module.exports = router;