const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('index');
  // res.sendFile('login.html', { root: 'project-server/views' });
});

module.exports = router;
