const express = require('express');
const router = express.Router();
const service = require('../service/signup.js');

router.get('/v1/ccb/signup/order/counterparty', function(req, res) {
    service.getCounterpartyList(req).then(response => {
        res.send(response);
    });
});

router.post('/v1/ccb/signup/order/submit/page', function(req, res) {
    service.submitSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.delete('/v1/ccb/signup/order/submit/delete', function(req, res) {
    service.deleteSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.post('/v1/ccb/signup/order/update', function(req, res) {
    service.updateSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.get('/v1/ccb/signup/order/counterparty', function(req, res) {
    service.getCounterpartyList(req).then(response => {
        res.send(response);
    });
});

module.exports = router;