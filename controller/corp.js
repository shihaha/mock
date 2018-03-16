const express = require('express');
const router = express.Router();
const service = require('../service/signup.js');

router.post('/v1/ccb/signup/order/insert', function(req, res) {
    service.insertSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.delete('/v1/ccb/signup/order/delete', function(req, res) {
    service.deleteSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.post('/v1/ccb/signup/order/update', function(req, res) {
    service.updateSignupInfo(req.body).then(response => {
        res.send(response);
    });
});

router.get('/v1/ccb/signup/order/find', async function(req, res) {
    let response = await service.findSignupInfo(req.query);
    res.send(response);
});

module.exports = router;