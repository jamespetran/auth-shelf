const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log(`In DELETE /${req.params.id}, user is`, req.user.id);

  // Write SQL query
  let queryText = `
    DELETE FROM "item"
    WHERE "id" = $1 AND "user_id" = $2;
  `
  let queryParams = [
    req.params.id, // $1
    req.user.id // $2
  ]

  pool.query(queryText, queryParams)
  .then( result => res.sendStatus(201))
  .catch( err => {
    console.error(`Error in DELETE /${req.params.id}`, err);
    res.sendStatus(403);
  });

});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
