const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
  console.log('nice');

})

router.get('/', (req, res) => {
  console.log('get successful');

  res.send('yuh')
})

module.exports = router;