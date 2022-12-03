const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
  console.log('nice');

})

router.get('/', (req, res) => {

  const queryText = `SELECT * FROM feedback`
  
  pool.query(queryText)
    .then(dbRes => {
      res.send(dbRes.rows)
    }).catch(err => {
      console.log('router.get', err);
    })

})

module.exports = router;