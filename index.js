const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your portfolio app!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
