// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a basic route for the registration form
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html'); // Create this file next
});

// Handle form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Here, you can process the registration data (e.g., save it to a database)
  console.log(`User registered: ${username}, ${email}, ${password}`);
  res.send('Registration successful!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
