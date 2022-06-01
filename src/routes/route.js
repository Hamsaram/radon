const express = require('express');

const externalModule1 =require('../logger/logger')
const externalModule2 =require('../util/helper')
const externalModule3 =require('../validater/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
  externalModule1.a()
  
  externalModule2.dd()
  externalModule2.mm()
  externalModule2.bt()

  externalModule3.three()

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason