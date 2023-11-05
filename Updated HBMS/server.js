const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for your application

// Serve the main menu (index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle patient admission registration and bed assignment
app.post('/admission', (req, res) => {
  // Handle patient admission and bed assignment here
  // You'll need to update JSON data files or manage data in memory
  // Return a response, such as success or failure
});

// Serve the dashboard (index.html) with bed status
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

