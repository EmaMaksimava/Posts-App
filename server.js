const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(3030, () => console.log('Server running...'));