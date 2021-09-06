// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.post('/docs/install/install-rights', function (req, res){
if (req.body['installrights'] === 'Yes') {
  res.redirect ('/docs/install/mac-or-windows');
  }
  else {
    res.redirect('/docs/how-tos/browser-setup-start');
  }
});

module.exports = router;
