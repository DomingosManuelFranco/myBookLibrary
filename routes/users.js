
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET to /users/cool */
router.get("/users/cool", (req, res, next) => {
  res.render('users', {text: "You're so cool"});
})

module.exports = router;
