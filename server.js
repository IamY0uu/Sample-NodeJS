// server.js
const express = require('express');
const app = express();
const helloRoute = require('./routes/hello');

const PORT = process.env.PORT || 3000;

app.use('/api', helloRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Sample App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

