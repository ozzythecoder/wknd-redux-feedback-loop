const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {

  const { feelings, understanding, support, comments } = req.body

  const queryText = `
  INSERT INTO feedback
    (feeling, understanding, support, comments)
  VALUES
    ($1, $2, $3, $4);
  `;

  pool.query(queryText, [feelings, understanding, support, comments])
    .then(dbRes => {
      console.log('successfully POSTed feedback');
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('pool.query', err);
      res.sendStatus(500);
    })

})

router.get('/', (req, res) => {

  const queryText = `SELECT * FROM feedback ORDER BY date DESC`
  
  pool.query(queryText)
    .then(dbRes => {
      res.send(dbRes.rows)
    }).catch(err => {
      console.log('router.get', err);
    })

})

router.delete('/:id', (req, res) => {

  const queryText = `DELETE FROM feedback WHERE ID = $1`

  pool.query(queryText, [req.params.id])
    .then(dbRes => {
      console.log('deleted item id', req.params.id, 'from database');
      res.sendStatus(200)
    })
    .catch(err => console.log('router.delete', err))
})

module.exports = router;