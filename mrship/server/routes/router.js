/**
 * Created by dengzhou on 2017/11/24.
 */
const express = require('express');
const router = express.Router();

let get = require('./get');
let post = require('./post');

router.get('/get.json', get);
router.post('/post.json', post);

module.exports = router;