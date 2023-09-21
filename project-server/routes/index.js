const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // Render the HTML file
  res.sendFile('login.html', { root: 'project-server/views' });
});

module.exports = router;
