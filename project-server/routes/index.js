const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  
  res.sendFile('login.html', { root: 'project-server/views' });
});
router.get('/register', (req, res, next) => {
  
  res.sendFile('register.html', { root: 'project-server/views' });
});
module.exports = router;
