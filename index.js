const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import the db module

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Define an API endpoint to get nodes data
app.get('/nodes', (req, res) => {
  const queryText = 'SELECT * FROM nodes';

  // Execute the query
  db.query(queryText)
    .then(result => {
      res.json(result.rows); // Send nodes data as JSON
    })
    .catch(error => {
      res.status(500).json({ error: 'Error executing query', details: error });
    });
});

app.get('/edges', (req, res) => {
    const queryText = 'SELECT * FROM edges';
  
    // Execute the query
    db.query(queryText)
      .then(result => {
        res.json(result.rows); // Send edges data as JSON
      })
      .catch(error => {
        res.status(500).json({ error: 'Error executing query', details: error });
      });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
