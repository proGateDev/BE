const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
