const express = require('express');
const router = express.Router();

const ADD = require('../Controller/PostData');
const GET = require('../Controller/GetData');

router.post('/postData', ADD.addData);
router.get('/getData', GET.getData)

module.exports = router;